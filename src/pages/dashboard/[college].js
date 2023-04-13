import { useRouter } from "next/router";
import MainNavbar from "../../components/NavBar";
import SideNavbar from "../../components/SideNavbar";
import { getAllColleges, topContributor, topContributors, uploadNotes } from "@/actions/auth";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/firebase/firebase";


const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const Dashboard = () => {
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [collegeData, setCollegeData] = useState([]);
    const [buttondisabled, setButtondisabled] = useState(false);
    const [progresspercent, setProgresspercent] = useState(0);

    const { college } = router.query;

    useEffect(() => {
        if(!college) return;

        const fetchContributors = async () => {
            const {collegeDetails} = await topContributor(college)
            setCollegeData(collegeDetails.topPerformer)
        }
        fetchContributors();
    }, [college])
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        if (file.size >= 20 * 1000000) {
            toast.error("Please upload file of size less than 20 MB");
        } else {
            setFile(acceptedFiles[0])
        }
    }, []);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "application/pdf": [".pdf"]
        }, maxFiles: 1, onDrop
    })
    const uploadFile = async (title, year, branch, e) => {
        setButtondisabled(true)
        if (!file) {
            toast.error("Please select a file")
            return;
        }
        const email = JSON.parse(localStorage.getItem("user")).emailId
        try {
            const storageRef = ref(storage, `pdfs/${email}/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress =
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgresspercent(progress);
                },
                (error) => {
                    toast.error(error.message)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        try {
                            const { data } = await axios.post(`${BASE_URL}/uploadNotes`, {
                                driveUrl: downloadURL,
                                title: title,
                                year: year,
                                branch: branch
                            }, {
                                headers: {
                                    authorization: `Token ${localStorage.getItem("token")}`
                                }
                            })
                            toast.success("File uploaded successfully")
                            e.target.reset();
                            setFile(null);
                            const {collegeDetails}=await topContributor(college);
                            setCollegeData(collegeDetails.topPerformer)
                            setButtondisabled(false)
                        }
                        catch (err) {
                            setButtondisabled(false);
                            toast.error(err.message)
                        }
                    });
                }
            );

        } catch (err) {
            setButtondisabled(false)
            console.log(err)
        }
        // const res = await uploadNotes(driveUrl, title, year, branch)
    }
    return (
        <>
            <MainNavbar />
            {console.log(collegeData)}
            <div className="dashboard">
                <SideNavbar />
                <div className="card dashboard-container box-shadow-1">
                    <div className="welcomeMessage">
                        <h1>Welcome to {college?.replace("-", " ")}</h1>
                        <p> To share and download your pdfs and notes, navigate to navbar.</p>
                    </div>
                    {collegeData?.length > 0 && (
                        <div className=" card topContributors box-shadow-2">
                            <div className="header">
                                Top Contributors
                            </div>
                            <table class="table table-bordered">
                                <tbody>
                                    {collegeData?.map((user, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td><Link href={`/profile/${user._id}`}><div className="link">{user.displayName}</div></Link></td>
                                                <td>{user.pdfs.length} Uploads</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>)
                    }
                    <div className="card uploadNotesForm">
                        <div id="form" data-aos="zoom-in-up" class="card box-shadow-2">
                            <h4 class="p-2 text-center header">Share your notes below</h4>
                            <div class="p-3">
                                <form id="uploadForm" name="my-form" class="forms-sample" onSubmit={(e) => {
                                    e.preventDefault();
                                    uploadFile(e.target.title.value, e.target.year.value, e.target.branch.value, e);
                                }}>
                                    <div class="form-group">
                                        <input type="text" name="title" class="form-control inputStretch" id="exampleInputUsername1"
                                            placeholder="Enter a suitable title for your upload." autocomplete="off" required />
                                    </div>
                                    <div class="d-flex">
                                        <div class="form-group w-100 marginRight1">
                                            <label for="exampleFormControlSelect1">Year</label>
                                            <select name="year" class="form-control" id="exampleFormControlSelect1" required>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div class="form-group w-100 marginLeft1">
                                            <label for="exampleFormControlSelect1">Branch</label>
                                            <select name="branch" class="form-control " id="exampleFormControlSelect1" required>
                                                <option>BioTech Engineering</option>
                                                <option>Civil Engineering</option>
                                                <option>Computer Science And Engineering</option>
                                                <option>Chemical Engineering</option>
                                                <option>Electrical Engineering</option>
                                                <option>Electronics And Communication Engineering</option>
                                                <option>Mechanical Engineering</option>
                                                <option>Production Engineering</option>
                                                <option>Electronics And Instrumation Engineering</option>
                                                <option>Bsms Physics</option>
                                                <option>Bsms Chemistry</option>
                                                <option>Mathematics And Computing</option>
                                                <option>Engineering Physics</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="choose-file">

                                        <label for="file-upload">
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {file ?
                                                    <div className="uploadText">{file?.name}</div>
                                                    :
                                                    <>
                                                        <div className="uploadText mb-1">Upload your notes here.</div>
                                                        <div className="uploadText" >File type should be pdf and file size should be less than 20MB</div>
                                                    </>
                                                }

                                            </div>
                                        </label>
                                    </div>
                                    <div class="card uploadButton">
                                        <button disabled={buttondisabled} id="pop-btn" type="submit" class="btn btn-danger btn-icon-text">
                                            <i class="mdi mdi-upload btn-icon-prepend"></i>
                                            {progresspercent > 0 && progresspercent < 100 ? `Uploading ${progresspercent}%` : "Click here to upload"}
                                        </button>
                                        <Toaster />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card tutorialVideo">
                        <h5 class="p-2 text-center header">Tutorial to get drive link</h5>
                        <div class="dashboard__video">

                            {/* <video class="" controls>
                    <source src="/videos/FileUpload.mp4" type="video/mp4"/>
                  </video> */}
                        </div>
                    </div>
                    <footer class="footer bg-white p-4 card">
                        <div class="">
                            <span class="text-muted text-center">Copyright © AncoreNotes</span>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default Dashboard;
