import { Sidebar, Menu, MenuItem, SubMenu, MenuOutlinedIcon,useProSidebar } from 'react-pro-sidebar';




const SideNavbar = () => {
    const {broken} = useProSidebar();
    if(broken)
    return (
        <Sidebar backgroundColor='#1f2833' breakPoint='md' width='100%' className='minHeight' defaultCollapsed="true">
        <Menu className=''>
        
            <MenuItem backgroundColor='#1f2833' label="Dashboard" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
            </svg>>Dashboard
            </MenuItem>


            <SubMenu label="1st Year" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>All Branches</MenuItem>
            </SubMenu> 

            <SubMenu label="2nd Year" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>BioTech</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Civil</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Computer  Science</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Chemical</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Electrical</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Electronics and Communication</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Mechanical</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Production</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Electronics and Instrumentation</MenuItem>
            </SubMenu>   

            <SubMenu label="3rd Year" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>></SubMenu> 


            <SubMenu label="4th Year" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>></SubMenu> 
            
            <SubMenu label="5th Year" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>></SubMenu>             
        </Menu>
        </Sidebar>
    )
    else
    return ( 
        <Sidebar backgroundColor='#1f2833' breakPoint='md' className="minHeight"collapsedWidth='80px'>
        <Menu className=''>
            <MenuItem backgroundColor='#1f2833' label="Dashboard" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
            </svg>>Dashboard
            </MenuItem>


            <SubMenu label="1st Year" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>All Branches</MenuItem>
            </SubMenu>  

            <SubMenu label="2nd Year" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>BioTech</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Civil</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Computer  Science</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Chemical</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Electrical</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Electronics and Communication</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Mechanical</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Production</MenuItem>
                <MenuItem className='liStyles' backgroundColor='#1f2833' label="Dashboard" href='/a' icon=<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="black" class="bi bi-circle-fill" viewBox="0 0 8 8">
                <circle cx="3" cy="3" r="3"/></svg>>Electronics and Instrumentation</MenuItem>
            </SubMenu>     

            <SubMenu label="3rd Year" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>></SubMenu> 


            <SubMenu label="4th Year" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>></SubMenu> 


            <SubMenu label="5th Year" icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7940" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>></SubMenu>    
                     
        </Menu>
        </Sidebar>
     );
}
 
export default SideNavbar;