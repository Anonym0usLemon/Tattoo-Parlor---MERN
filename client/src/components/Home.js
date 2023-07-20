import React from 'react'; 
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="schedule-apt padding-inline">
                <video className="background-video" autoplay="" muted="" loop="">
                    <source src="/Video/TattooBanner.mp4" type="video/mp4"/>
                    <source src="/Video/TattooBanner.webm" type="video/webm"/>
                </video>

                <div className="paper-gradient"></div>

                <div className="schedule-apt-text">
                    <h1>
                        <span>WAUKESHA'S TOP RATED</span>
                        <br/> 
                        BODY ART STUDIO
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <p>

                        <a class="schedule-apt-button" href="/Contact"> 
                            <img class="apt-button-left" src="/images/Home/schedule-apt-left-btn.png" border="0" alt="" /> 
                            SCHEDULE APPOINTMENT 
                            <img class="apt-button-right" src="/images/Home/schedule-apt-right-btn.png" border="0" alt="" /> 
                        </a>
                    </p>
                </div>
            </section>

            <section className="excellent-headline-section padding-inline">
                <picture>
                    <source media="(min-width:500px" srcset="./images/Home/excellent-headline-top-1500px.png"/>
                    <img className="exl-section-background" src="./images/Home/excellent-headline-top.png" alt=""/>
                </picture>

                <div className="exl-background-color"></div> {/* Blends with the <picture> element so that they look like one color when displayed */}

                <div className="exl-content">
                    <div className="exl-btns">
                        <Link className="exl-btn1" to="/TattooArtists">
                            <picture>
                                <source media="(max-width:640px)" srcset="/images/Home/our-artists.jpg" />
                                <img className="ServicesImg" src="/images/Home/our-artists-desktop.png" alt=""/>
                            </picture>
                            <span>OUR ARTISTS</span>
                            {/* Get an image of an arrow and put it here! */}
                        </Link>

                        <Link className="exl-btn2" to="/Piercings">
                            <picture>
                                <source media="(max-width:640px)" srcset="/images/Home/piercings.jpg" />
                                <img className="ServicesImg" src="/images/Home/piercings-desktop.png" alt=""/>
                            </picture>
                            <span>PIERCINGS</span>
                            {/* Get an image of an arrow and put it here! */}
                        </Link>

                        <Link className="exl-btn3" to="/TattooRemoval">
                            <picture>
                                <source media="(max-width:640px)" srcset="/images/Home/tattoo-removal.jpg" />
                                <img className="ServicesImg" src="/images/Home/tattoo-removal-desktop.png" alt=""/>
                            </picture>
                            <span>OUR ARTISTS</span>
                            {/* Get an image of an arrow and put it here! */}
                        </Link>
                    </div>
                    <div class="exl-text">				

                        <h2>STAYING RAD SINCE 1996<br /> 
                            <span className="exl-headline-span"> 
                                <img className="exl-text-left" src="/Content/images/Home/exl-headline-left.png" alt="" /> 
                                <span className="exl-headline-p">EXCELLENT HEADLINE</span> 
                                <img className="exl-text-right" src="/Content/images/Home/exl-headline-right.png" alt="" /> 
                            </span>
                        </h2>

                        <p className="exl-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem 
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua<span id="dots">... </span><span id="moreText"> Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut. <br /><br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span> <button id="readMoreBtn" onclick="readMore()">Read More</button> {/* Add fucntionality to ReadMore button when time permits */}
                        </p>
                    </div>
                </div>

                <div class="exl-bird"></div>
                <div class="exl-flower"></div>
            </section>

            <section className="our-work-section padding-inline">
                <div className="our-work-content">
                <h2>OUR WORK</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="our-work-p2">abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi.</p>
                <p><Link className="blk-home-button" to="/gallery">VIEW GALLERY</Link></p></div>

                <div className="our-work-gallery">
                    <div className="gallery-images">
                        <img src="/images/Home/gallery1.jpg" alt=""/>
                    </div>
                    <div className="gallery-images">
                        <img src="/images/Home/gallery2.jpg" alt=""/>
                    </div>
                    <div className="gallery-images">
                        <img src="/images/Home/gallery3.jpg" alt=""/>
                    </div>
                    <div className="gallery-images">
                        <img src="/images/Home/gallery4.jpg" alt=""/>
                    </div>
                </div>
            </section>

            <section className="learn-more">
                <div className="body-jewelry padding-inline">
                    <div className="body-jewelry-div">
                        <h2>LARGEST BODY <br /> JEWELRY SELECTION</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <Link className="blk-home-button" to="/piercings">LEARN MORE</Link>
                    </div>
                </div>

                <div className="tattoo-removal padding-inline">
                    <div>
                        <h2>TATTOO REMOVAL- <br /> REGRETS HAPPEN.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <Link className="blk-home-button" to="/TattooRemoval">OUR PROCESS</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home; 