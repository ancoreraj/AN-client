const About = () => {
    return (
        <div className="about_us">
            <nav class="navbar navbar-expand-sm navbar-light bg-transparent">
                <div class="container">
                    <a class="navbar-brand navbarText" href="/">AncoreNotes</a>
                    {/* <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link navbarText" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navbarText" href="/about">About</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>

            <div class="about__main">
                <div class="about__content">

                    <h1 class="text-center">Hi everyone.</h1>
                    <p className="aboutText">We are just bunch of students of NIT Agartala students trying to help our peers to Share
                        their pdfs and notes to their friends.
                        Want to know about us more just click to contact us. We will revert back to you soon.
                    </p>
                    <div className="contributors">
                        <a class="btn btn-outline-light mt-3 con" href="https://www.linkedin.com/in/ankur-raj-/" target="_blank">Founder : Ankur</a>
                        <a class="btn btn-outline-light mt-3 con" href="https://www.linkedin.com/in/rahul-9598/" target="_blank">Team : Rahul</a>
                    </div>

                </div>

                <div class="about__contactForm">

                    <form action="/contact" method="POST">

                        <h1 class="h3 mb-3 fw-normal text-center">Contact us/Feedback</h1>


                        <div class="form-floating mb-3">
                            <input type="text" class="my-input"
                                name="name"
                                placeholder="Name" required />
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="my-input"
                                name="email"
                                placeholder="Email Id" />
                        </div>
                        <div class="form-floating mb-3">
                            <textarea type="message" class="my-input1"
                                name="message"
                                rows={3}
                                placeholder="Your Message"
                                required></textarea>
                        </div>

                        <button class="w-100 btn btn-primary" type="submit">Send</button>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default About;