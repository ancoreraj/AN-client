import { collegeInput } from "@/actions/auth";
import NavBar from "@/components/nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const CollegeInput = () => {
    const router = useRouter();
    const [check, setCheck] = useState(false);
    const collegeSelect = async(collegeName) => {
        if (collegeName == "what") {
            toast.error("Please select your college",{
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
            })
        }
        else {
            setCheck(true);
            const college=await collegeInput(collegeName)
            if (college) {
                toast.success("College Added Successfully")
                const user=JSON.parse(localStorage.getItem("user"))
                user.collegeName=collegeName
                localStorage.setItem("user",JSON.stringify(user))
                router.push(`/dashboard/${user.collegeName}`)
            }
            setCheck(false);

        }
    }

    return (
        <div className="landing">
            <header >
                <NavBar />

                <div class="container">
                    <div class="lp__body">
                        <h4>Welcome </h4>
                        <h1>You are just one step from the dashboard</h1>



                        <div class="row lp__bodyLogin">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                collegeSelect(e.target.college.value);
                            }}>
                                <div class="form-group m-1 go">
                                    <select onfocus='this.size=10' onblur='this.size=1'
                                        onchange='this.size=1; this.blur();' class="form-control collegeSelect" name="college" required >

                                        <option disabled value="what" selected hidden>Whats your College?</option>
                                        <option value="NIT-Agartala">NIT Agartala</option>
                                        <option value="NIT-Allahabad">NIT Allahabad</option>
                                        <option value="NIT-Bhopal">NIT Bhopal</option>
                                        <option value="NIT-Nagpur">NIT Nagpur</option>
                                        <option value="NIT-Durgapur">NIT Durgapur</option>
                                        <option value="NIT-Hamirpur">NIT Hamirpur</option>
                                        <option value="NIT-Jaipur">NIT Jaipur</option>
                                        {/* <option value="NIT Jalandhar">NIT Jalandhar</option>
                                        <option value="NIT Jamshedpur">NIT Jamshedpur</option>
                                        <option value="NIT Kurukshetra">NIT Kurukshetra</option>
                                        <option value="NIT Calicut">NIT Calicut</option>
                                        <option value="NIT Rourkela">NIT Rourkela</option>
                                        <option value="NIT Silchar">NIT Silchar</option>
                                        <option value="NIT Karnataka">NIT Karnataka</option>
                                        <option value="NIT Warangal">NIT Warangal</option>
                                        <option value="NIT Surat">NIT Surat</option>
                                        <option value="NIT Tiruchirappalli">NIT Tiruchirappalli</option>
                                        <option value="NIT Srinagar">NIT Srinagar</option>
                                        <option value="NIT Raipur">NIT Raipur</option>
                                        <option value="NIT Arunachal Pradesh">NIT Arunachal Pradesh</option>
                                        <option value="NIT Delhi">NIT Delhi</option>
                                        <option value="NIT Goa">NIT Goa</option>
                                        <option value="NIT Manipur">NIT Manipur</option>
                                        <option value="NIT Meghalaya">NIT Meghalaya</option>
                                        <option value="NIT Mizoram">NIT Mizoram</option>
                                        <option value="NIT Nagaland">NIT Nagaland</option>
                                        <option value="NIT Puducherry">NIT Puducherry</option>
                                        <option value="NIT Sikkim">NIT Sikkim</option>
                                        <option value="NIT Uttarakhand">NIT Uttarakhand</option>
                                        <option value="NIT Andhra Pradesh">NIT Andhra Pradesh</option> */}
                                    </select>
                                </div>

                                <button disabled={check} type="submit" class="m-0 btn btn-dark btn-icon-text">
                                    <div class="d-flex go">
                                        <p class="spacing">Lets go</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                                        </svg>
                                    </div>
                                </button>
                                <Toaster/>
                            </form>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default CollegeInput;