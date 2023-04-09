import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useProSidebar} from 'react-pro-sidebar'
const Navbar = () => {
    const { collapseSidebar } = useProSidebar();
    return ( 
        <nav class="customNavbar sticky-top">
        <div className="brandLogo d-flex">
            <img src="/o2.png" height="40"/>
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