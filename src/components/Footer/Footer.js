import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
                <footer className="footer ">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="footer-content container">
                                            <h2>Our Address</h2>
                                            <p>123 Street, New York, USA</p>
                                            <p>+012 345 67890</p>
                                            <p>info@domain.com</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 container">
                                        <div className="footer-link">
                                            <h2>Quick Links</h2>
                                            <p>Terms of use</p>
                                            <a className="link" href="#">Cookies</a>
                                            <a className="link" href="#">Help</a>
                                            <a className="link" href="#">FAQs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="footer-newsletter container">
                                    <h2>Newsletter</h2>
                                    <p>Below you will find free video lessons/tutorials; free mobile apps; free audiobooks, ebooks and textbooks; quality YouTube channels; free foreign language lessons; test prep materials; and free </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
        </div>
    );
};

export default Footer;