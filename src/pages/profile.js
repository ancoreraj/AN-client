import Image from "next/image";
import NavBar from "../Components/NavBar";
import SideNavbar from "../Components/SideNavbar";


const Profile = () => {

    return ( 
        <>
            <NavBar/>
            <div className="dashboard">
                <SideNavbar/>
                <div className="card dashboard-container box-shadow-1">
                    <div className="header">
                        <div className="profileCard">

                            <div className="profileDetails">
                            <h1 className="profileName" >PRAKHAR KUMAR SRIVASTAVA</h1>
                            <div className="moreInfo">
                                <h6 className="collegeName">NIT Agartala</h6>
                                <h6 className="noOfUploads"> 0 Upload(s)</h6>
                            </div>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Update Your College
                            </button>
                            </div>

                            {/* Modal */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel" style={{color:"black"}}>Upload Your College</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                            <div class="form-group m-1">
                                  <input class="form-control" type="text" name="college" list="colleges"
                                    autocomplete="off" placeholder="Whats your College?" required />
                                  <datalist id="colleges">
                                    <option value="NIT Agartala" />
                                    <option value="NIT Allahabad" />
                                    <option value="NIT Bhopal"/>
                                    <option value="NIT Nagpur"/>
                                    <option value="NIT Durgapur"/>
                                    <option value="NIT Hamirpur"/>
                                  </datalist> 
                            </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                            </div>
                            </div>

                            <Image  className="profileIcon" src="https://lh3.googleusercontent.com/a-/AOh14GiDjvYA16cudg3XNtFveFsEUNVq5BZqXtc65qhFAw=s96-c"
                            alt="Picture of the author"
                            width={88}
                            height={88}
                            />

                        </div>
                    </div>
                    <div className="card border p-3 allFiles" >

                        <div class="card d-flex flex-column font-class" style={{marginTop:"1rem"}}>
                        <h3 class="my-3 ml-3" style={{marginLeft:"1rem"}}>
                        Polarization
                        </h3>
                        <div class="d-flex justify-content-between"  style={{ marginLeft:"0.5rem"}}>
                        <div class="d-flex fileButtons">
                        <p class="d-flex align-items-center" onclick="">
                            <a id="liker" class="profileUrl d-flex fileButton">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{padding:"2px"}} width="16" height="16" fill="currentColor" class="bi bi-capslock" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z"/>
                            </svg>
                            <span class="" style={{padding:"2px"}}>Upvote</span>
                            <span>12</span>            
                            </a>
                        </p>
                        <p class="d-flex align-items-center">
                            <a class="profileUrl d-flex fileButton" href="" target="_blank" style={{padding:"2px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" style={{padding:"2px"}}>
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                            </svg>
                            <span class="" style={{padding:"2px"}}>Download</span>
                            </a>
                        </p>
                        <p class="d-flex align-items-center">
                            <a class="profileUrl d-flex fileButton" href="" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            <span style={{padding:"1px"}}>
                               Delete
                            </span>
                            </a>
                        </p>
                        </div>
                        <div class="date" style={{marginRight:"1rem"}}>
                            <p>Posted on 12/12/2021</p>
                        </div>
                        </div>
                        </div>
                        <div class="card d-flex flex-column font-class" style={{marginTop:"1rem"}}>

                            <h3 class="my-3 ml-3" style={{marginLeft:"1rem"}}>
                                Polarization
                            </h3>
                            <div class="d-flex justify-content-between"  style={{ marginLeft:"0.5rem"}}>
                                    <div class="d-flex fileButtons">
                                        <p class="d-flex align-items-center" onclick="">
                                            <a id="liker" class="profileUrl d-flex fileButton">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{padding:"2px"}} width="16" height="16" fill="currentColor" class="bi bi-capslock" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z"/>
                                            </svg>
                                            <span class="" style={{padding:"2px"}}>Upvote</span>
                                            <span>12</span>            
                                            </a>
                                        </p>
                                        <p class="d-flex align-items-center">
                                            <a class="profileUrl d-flex fileButton" href="" target="_blank" style={{padding:"2px"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" style={{padding:"2px"}}>
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                            </svg>
                                            <span class="" style={{padding:"2px"}}>Download</span>
                                            </a>
                                        </p>
                                        <p class="d-flex align-items-center">
                                            <a class="profileUrl d-flex fileButton" href="" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                            </svg>
                                            <span style={{padding:"1px"}}>
                                            Delete
                                            </span>
                                            </a>
                                        </p>
                                    </div>
                                    <div class="date" style={{marginRight:"1rem"}}>
                                        <p>Posted on 12/12/2021</p>
                                    </div>
                                </div>
                        </div>
                        </div>
                </div>

            </div>
        </>
     );
}
 
export default Profile;