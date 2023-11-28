import React from "react";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>PlacherExpert</h3>
                            <p>
                                A108 Adam Street <br />
                                New York, NY 535022<br />
                                United States <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Floor Installation</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Hardwood Flooring</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Commercial Flooring Solutions</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Newsletter</h4>
                            <p>Stay in the loop! Join our newsletter for exclusive updates and special offers. Subscribe now</p>
                            <form action="">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>PlacherExpert</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://github.com/TarekVisch">Tarek Chentouf, 4 IIR, GR 3</a>
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="https://www.linkedin.com/in/tarek-chentouf/" className="linkedin"><img src="/images/icons/linkedin.svg" alt="in" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;