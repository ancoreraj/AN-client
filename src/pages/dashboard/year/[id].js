import MainNavbar from "../../../components/NavBar";
import SideNavbar from "../../../components/SideNavbar";

const Files = () => {
    
    return ( 
        <>
        <MainNavbar/>
        <div className="dashboard">
        <SideNavbar/>
        <div className="card dashboard-container">
        <div className="welcomeMessage">
                <h1>1st Year</h1>
                <h5> All Branches NIT Agartala</h5>
        </div>
        <div class="card box-shadow-2 formBox">
                <form action="/dashboard/search/<%= year %>/<%= branch %>" method="POST" class="d-flex">
                  <input type="text" class="form-control marginRight1" id="exampleFormControlInput1"
                    placeholder="Search for your notes (enter minimum 3 letters to get better results)"
                    name="searchQuery" autocomplete="off" required formInput/>
                  <button type="submit" class="btn btn-secondary formButton">Search</button>
                </form>
        </div>
        <div className="card border p-3 allFiles" >
        <div class="card d-flex flex-column font-class" style={{marginTop:"1rem"}}>
                    <h3 class="my-3 ml-3" style={{marginLeft:"1rem"}}>
                        Polarization
                    </h3>
                    <div class="d-flex justify-content-between"  style={{ marginLeft:"0.5rem"}}>
                            <div class="d-flex fileButtons">
                                <p class="" onclick="">
                                    <a id="liker" class="profileUrl d-flex fileButton">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{padding:"1px"}} width="16" height="16" fill="currentColor" class="bi bi-capslock" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z"/>
                                    </svg>
                                    <span class="" style={{padding:"1px"}}>Upvote</span>
                                    <span>12</span>            
                                    </a>
                                </p>
                                <p class="">
                                    <a class="profileUrl d-flex fileButton" href="" target="_blank" style={{padding:"1px"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" style={{padding:"1px"}}>
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                    </svg>
                                    <span class="" style={{padding:"1px"}}>Download</span>
                                    </a>
                                </p>
                                <p class="">
                                    <a class="profileUrl d-flex fileButton" href="" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"  height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    </svg>
                                    <span style={{padding:"1px"}}>
                                        Rohit
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
                                <p class="" onclick="">
                                    <a id="liker" class="profileUrl d-flex fileButton">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{padding:"1px"}} width="16" height="16" fill="currentColor" class="bi bi-capslock" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z"/>
                                    </svg>
                                    <span class="" style={{padding:"1px"}}>Upvote</span>
                                    <span>12</span>            
                                    </a>
                                </p>
                                <p class="">
                                    <a class="profileUrl d-flex fileButton" href="" target="_blank" style={{padding:"1px"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" style={{padding:"1px"}}>
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                    </svg>
                                    <span class="" style={{padding:"1px"}}>Download</span>
                                    </a>
                                </p>
                                <p class="">
                                    <a class="profileUrl d-flex fileButton" href="" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"  height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    </svg>
                                    <span style={{padding:"1px"}}>
                                        Rohit
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
 
export default Files;