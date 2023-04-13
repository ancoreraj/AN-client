import Image from 'next/image';
import { useState } from 'react';
import {useProSidebar} from 'react-pro-sidebar'


const Navbar = () => {

    const { collapseSidebar,broken } = useProSidebar();
    const [toggleProfile,setToggleProfile] = useState(false);

    if(broken)
    return(
        <nav class="customNavbar sticky-top">
        <div className="brandLogo d-flex justify-content-between">
            <img src="https://firebasestorage.googleapis.com/v0/b/ancorenotes-29b02.appspot.com/o/static_files%2FLogo.png?alt=media&token=717a0272-1635-46c2-bc5c-96b39fef7ff2" height="40"/>
            <div className='d-flex'>
            <div className="profile">
            <div class="dropdown show">
            <a class="dropdown-toggle profileDropdown d-flex align-item-center" href="#" onClick={() => setToggleProfile(!toggleProfile)} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Image src="https://lh3.googleusercontent.com/a-/AOh14GiDjvYA16cudg3XNtFveFsEUNVq5BZqXtc65qhFAw=s96-c" width="32" height="32" className='profileImage'/>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="/profile"><svg xmlns="http://www.w3.org/2000/svg" className='marginRight2' width="16" height="16" fill="#FF7940" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg> Profile</a>
                <a class="dropdown-item" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#FF7940" class="marginRight2 bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>Contact Us</a>
                <a class="dropdown-item" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="marginRight2 bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
                Logout</a>
            </div>
            </div>
            </div>
            <div className="toggleButton mt-2" onClick={() => collapseSidebar()}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </div>
        </div>  
        </div>

        </nav>
    )
    else
    return ( 
        <nav class="customNavbar sticky-top box-shadow-5">
        <div className="brandLogo d-flex justify-content-between">
        <div className='d-flex'>
            <img src="https://firebasestorage.googleapis.com/v0/b/ancorenotes-29b02.appspot.com/o/static_files%2FmainLogo.png?alt=media&token=f898a9ff-4079-4827-b6f1-f3e180a805cf" height="40"/>
            <div className="toggleButton mt-2" onClick={() => collapseSidebar()}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-filter-left" viewBox="0 0 16 16"><path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </div>
        </div>
        <div className="profile">
        <div class="dropdown show" style={{marginRight:"40px"}}>
            <a class="dropdown-toggle profileDropdown d-flex align-item-center" href="#" onClick={() => setToggleProfile(!toggleProfile)} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Image src="https://lh3.googleusercontent.com/a-/AOh14GiDjvYA16cudg3XNtFveFsEUNVq5BZqXtc65qhFAw=s96-c" width="32" height="32" className='profileImage'/>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="/profile"><svg xmlns="http://www.w3.org/2000/svg" className='marginRight2' width="16" height="16" fill="#FF7940" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg> Profile</a>
                <a class="dropdown-item" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#FF7940" class="marginRight2 bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>Contact Us</a>
                <a class="dropdown-item" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="marginRight2 bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
                Logout</a>
            </div>
            </div>
        </div>
        </div>

        </nav>
     );
}
 
export default Navbar;