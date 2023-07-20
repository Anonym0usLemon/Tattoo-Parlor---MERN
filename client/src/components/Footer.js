import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="padding-inline">

            <div className="footer-container">
                <div className="logo-container">
                    <Link className="footer-logo-link" to="/" target="_blank">
                        <img className="footer-logo" src="/images/Footer/footer-logo.png" alt=""/>
                    </Link>

                    <div className="contact-info">
                        <Link className="address" to="#">1430 E Moreland Blvd, Waukesha, WI</Link>
                        <Link className="js-phoneswap footer-phone" to="/contact">262.574.9400</Link>
                        <h4 className="copyright">©<span id="dynamic-year"></span> Designed by iNET Web - Developed by Dominic DiModugno</h4> 
                    </div>
                </div>

                <div className="about-container">

                    {/* Mobile View < 1100px || Mobile styles are set to display: none at 1100px */}

                    <div className="mobile-artists">
                        <Link className="footer-large-text" to="/TattooArtists">TATTOO ARTISTS</Link>
                        <Link className="footer-small-text" to="/Kyle">Kyle Baxter</Link>
                        <Link className="footer-small-text" to="/Bailey">Bailey Renee</Link>
                        <Link className="footer-small-text" to="/Jenn">Jenn Schafer</Link>
                        <Link className="footer-small-text" to="/Matt">Matt Krstic</Link>
                        <Link className="footer-large-text" to="/piercings">PIERCINGS</Link>
                        <Link className="footer-large-text" to="/TattooRemoval">TATTOO REMOVAL</Link>
                    </div>

                    <div className="mobile-info">
                        <Link className="footer-large-text" to="/About">ABOUT</Link>
                        <Link className="footer-small-text" to="/FAQ">Aftercare FAQ'S</Link>
                        <Link className="footer-small-text" to="/gallery">Our Shop</Link>
                        <Link className="footer-small-text" to="/Content/PDFs/ConsentForm.pdf">Client Forms</Link>
                        <Link className="footer-large-text" to="/OurWork">OUR WORK</Link>
                        <Link className="footer-large-text" to="/contact">CONTACT US</Link>
                    </div>

                    {/* <!-- Desktop View > 1100px || Desktop styles are set to display: none below 1100px--> */}

                    <div class="desktop-artists">
                        <Link class="footer-large-text" to="/TattooArtists">TATTOO ARTISTS</Link>
                        <Link className="footer-small-text" to="/Kyle">Kyle Baxter</Link>
                        <Link className="footer-small-text" to="/Bailey">Bailey Renee</Link>
                        <Link className="footer-small-text" to="/Jenn">Jenn Schafer</Link>
                        <Link className="footer-small-text" to="/Matt">Matt Krstic</Link>
                    </div>

                    <div class="desktop-about">
                        <Link class="footer-large-text" to="/about">ABOUT</Link>
                        <Link class="footer-small-text" to="/FAQ">Aftercare FAQ'S</Link>
                        <Link class="footer-small-text" to="/gallery">Our Shop</Link>
                        <Link class="footer-small-text" target="_blank" to="/Content/PDFs/ConsentForm.pdf">Client Forms</Link>
                    </div>

                    <div class="desktop-other">
                        <Link class="footer-large-text" to="/piercings">PIERCINGS</Link>
                        <Link class="footer-large-text" to="/TattooRemoval">TATTOO REMOVAL</Link>
                        <Link class="footer-large-text" to="/OurWork">OUR WORK</Link>
                        <Link class="footer-large-text" to="/create">CONTACT US</Link>
                    </div>
                </div>
            </div>
            <div class="social-media-links">
                <a href="#"><img className="facebook" alt="" src="/images/Footer/facebook.png"/></a>
                <a href="#"><img className="insta" alt="" src="/images/Footer/instagram.png"/></a>
                <a href="#"><img className="twitter" alt="" src="/images/Footer/twitter.png"/></a>
                <a href="#"><img className="tiktok" alt="" src="/images/Footer/tiktok.png"/></a>
            </div>
        </footer>

    );
}

export default Footer;