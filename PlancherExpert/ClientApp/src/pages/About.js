import React from "react";

const About = () => {
    return (
        <>
            <section id="about-us" className="about-us">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right"></div>
                        <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                            <div className="content d-flex flex-column justify-content-center">
                                <h3 data-aos="fade-up">About PlancherExpert </h3>
                                <p data-aos="fade-up">
                                    Established with a passion for quality and design, PlancherExpert has been a trusted name in the flooring industry for 15 years. Our journey began with a vision to provide clients with not just floors but statements that enhance the beauty and comfort of their spaces.
                                    Why Choose Us?
                                </p>
                                <div className="row">
                                    <div className="col-md-6 icon-box" data-aos="fade-up">
                                        <i className="expertise"></i>
                                        <h4>Expertise</h4>
                                        <p>Our team comprises skilled professionals with a wealth of experience in the flooring industry. From classic hardwood installations to cutting-edge sustainable options, we bring expertise to every project.</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                        <i className="craftsman"></i>
                                        <h4>Quality Craftsmanship</h4>
                                        <p>We believe in the artistry of flooring. Each installation is a testament to our commitment to precision and quality craftsmanship. Your satisfaction is our top priority.</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                        <i className="tailor"></i>
                                        <h4>Tailored Solutions</h4>
                                        <p>No two spaces are alike, and neither are our solutions. We work closely with clients to understand their unique preferences and needs, offering a wide range of customizable flooring options.</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                        <i className="client"></i>
                                        <h4>Client-Centric Approach</h4>
                                        <p>Your satisfaction is at the core of what we do. We prioritize clear communication, transparency, and reliable service from the initial consultation to the completion of every project.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About;