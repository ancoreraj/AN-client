import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-transparent">
            <div class="container">
                <Link class="navbar-brand navbarText logo__a" href="/"><Image class="nav__logo" src="https://firebasestorage.googleapis.com/v0/b/ancorenotes-29b02.appspot.com/o/static_files%2FmainLogo.png?alt=media&token=f898a9ff-4079-4827-b6f1-f3e180a805cf" alt="logo" width={200} height={40}/></Link>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`navbar-collapse navPos collapse`} id="collapsibleNavId">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <Link href="/" className="nav_link">
                            <div class="nav-link navbarText" >Home</div>
                            </Link>
                        </li>
                        <li class="nav-item" >
                        <Link href="/about" className="nav_link">
                            <div class="nav-link navbarText">About</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;