// Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-column">
                    <h4>Abstract</h4>
                    <ul>
                        <li>Branches</li>

                    </ul>
                </div>
                <div className="footer-column d">
                    <h4>Resource</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Release Notes</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className="footer-column d">
                    <h4>Community</h4>
                    <ul>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Dribble</li>
                        <li>Podcast</li>
                    </ul>
                </div>
                <div className="footer-column d">
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Legal</li>

                    </ul>

                    <div className='Contact-us'>
                        
                        <h5>Contact Us</h5>
                        <ul>
                            <li>info@abstract.com</li>
                        </ul>
                    </div>
                </div>



                <div className="footer-copyright">

                    
                <img src="./android-chrome-192x192.png" alt="" />
                    <p> &copy; Copyright  {new Date().getFullYear()}</p>
                    <p> Abstract Studio Design,Inc.</p>
                    All right reserved
                </div>


            </div>




        </footer>
    );
};

export default Footer;
