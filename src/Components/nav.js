import { useState } from "react";

const NavBar = () => {
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-transparent">
            <div class="container">
                <a class="navbar-brand navbarText logo__a" href="/"><img class="nav__logo" src="/images/o2.png" alt="logo" /></a>
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