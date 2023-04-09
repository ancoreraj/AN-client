import NavBar from "@/Components/nav";

const CollegeInput = () => {

    const collegeSelect = (college) => {
        if (college=="what") {
            alert("Please Select a College")
        }
        else{

        }
    }

    return (
        <div className="landing">
            <header >
                <NavBar/>

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
                                    <select class="form-control" name="college" required >
                                        <option value="what">Whats your College?</option>
                                        <option value="NIT Agartala">NIT Agartala</option>
                                        <option value="NIT Allahabad">NIT Allahabad</option>
                                        <option value="NIT Bhopal">NIT Bhopal</option>
                                        <option value="NIT Nagpur">NIT Nagpur</option>
                                        <option value="NIT Durgapur">NIT Durgapur</option>
                                        <option value="NIT Hamirpur">NIT Hamirpur</option>
                                    </select>

                                </div>
                                <button type="submit" class="m-0 btn btn-dark btn-icon-text">
                                    <div class="d-flex go">
                                        <p class="spacing">Lets go</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                                        </svg>
                                    </div>
                                </button>
                            </form>

                        </div>





                    </div>
                </div>
            </header>
        </div>
    );
}

export default CollegeInput;