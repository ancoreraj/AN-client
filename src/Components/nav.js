import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-transparent">
            <div class="container">
                <Link class="navbar-brand navbarText logo__a" href="/"><Image class="nav__logo" src="https://firebasestorage.googleapis.com/v0/b/ancorenotes-29b02.appspot.com/o/static_files%2FmainLogo.png?alt=media&token=f898a9ff-4079-4827-b6f1-f3e180a805cf" alt="logo" width={200} height={40}/></Link>
                <button onClick={handleToggle} class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`navbar-collapse navPos ${toggle ? 'collapse' : ''}`} id="collapsibleNavId">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link navbarText" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbarText" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;