import { useRouter } from "next/router";
import MainNavbar from "../../components/NavBar";
import SideNavbar from "../../components/SideNavbar";
import { getAllColleges, topContributors } from "@/actions/auth";

export const getStaticPaths = async () => {
    const res = await getAllColleges();
    const paths = res.colleges.map(college => {
        return {
            params: {
                college: college.collegeName
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const collegeName = context.params.college;
    const res = await topContributors(collegeName);

    return {
        props: { college: res }
    }
}

const Dashboard = ({ college: { college } }) => {

    return (
        <>
            <MainNavbar />
            <div className="dashboard">
                <SideNavbar />
                <div className="card dashboard-container box-shadow-1">
                    <div className="welcomeMessage">
                        <h1>Welcome to {college?.collegeName.replace("-", " ")}</h1>
                        <p> To share and download your pdfs and notes, navigate to navbar.</p>
                    </div>
                    {college?.topPerformer.length > 0 && (
                        <div className=" card topContributors box-shadow-2">
                            <div className="header">
                                Top Contributors
                            </div>
                            <table class="table table-bordered">
                                <tbody>
                                    {college?.topPerformer.map((user, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index+1}</th>
                                                <td><a className="link">{user.name}</a></td>
                                                <td>49 Uploads</td>
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
                                <form id="uploadForm" name="my-form" class="forms-sample" action="/dashboard/uploadfile"
                                    method="POST">
                                    <div class="form-group">
                                        <input type="text" name="title" class="form-control inputStretch" id="exampleInputUsername1"
                                            placeholder="Enter a suitable title for your upload." autocomplete="off" required />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="driveUrl" class="form-control inputStretch" id="exampleInputEmail1"
                                            placeholder="Google Drive Shareable link" autocomplete="off" required />
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
                                    <div class="card uploadButton">
                                        <button id="pop-btn" type="submit" class="btn btn-danger btn-icon-text">
                                            <i class="mdi mdi-upload btn-icon-prepend"></i>
                                            Upload your file
                                        </button>
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
