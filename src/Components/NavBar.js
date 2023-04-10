import {useProSidebar} from 'react-pro-sidebar'


const Navbar = () => {

    const { collapseSidebar,broken } = useProSidebar();

    if(broken)
    return(
        <nav class="customNavbar sticky-top">
        <div className="brandLogo d-flex justify-content-between">
            <img src="https://firebasestorage.googleapis.com/v0/b/ancorenotes-29b02.appspot.com/o/static_files%2FLogo.png?alt=media&token=717a0272-1635-46c2-bc5c-96b39fef7ff2" height="40"/>
            <div className="toggleButton mt-2" onClick={() => collapseSidebar()}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </div>
        </div>

        </nav>
    )
    else
    return ( 
        <nav class="customNavbar sticky-top">
        <div className="brandLogo d-flex">
            <img src="https://firebasestorage.googleapis.com/v0/b/ancorenotes-29b02.appspot.com/o/static_files%2FmainLogo.png?alt=media&token=f898a9ff-4079-4827-b6f1-f3e180a805cf" height="40"/>
            <div className="toggleButton mt-2" onClick={() => collapseSidebar()}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-filter-left" viewBox="0 0 16 16"><path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </div>
        <div className="profile">
        
        </div>
        </div>

        </nav>
     );
}
 
export default Navbar;