import react from 'react'; 
import { Link } from 'react-router-dom';

const TattooArtists = () => {
    return (
    <>
        <div className="secondary-banner">
                <img class="tattoo-art-background" src="/images/TattooArtists/background.png" alt=""/>
            </div>
        
        <section class="tattoo-artists-page">    
            <h1>
                Waukesha
                <span>
                    <img src="/images/TattooArtists/title-left.png" alt=""/>
                    Tattoo Artists
                    <img src="/images/TattooArtists/title-right.png" alt=""/>
                </span>
            </h1>

            <div class="tattoo-art-artists">
                <div class="tattoo-art-item">
                    <img src="/images/TattooArtists/Kyle.jpg" alt=""/>

                    <p>Kyle Baxter<span>Traditional Style</span></p>
                </div>

                <div class="tattoo-art-item">
                    <img src="/images/TattooArtists/Bailey.jpg" alt=""/>

                    <p>Bailey Renee<span>Geometric, Fine line Style</span></p>
                </div>

                <div class="tattoo-art-item">
                    <img src="/images/TattooArtists/Jenn.jpg" alt=""/>

                    <p>Jenn Schafer<span>Blackwork, Realism Style</span></p>
                </div>

                <div class="tattoo-art-item">
                    <img src="/images/TattooArtists/Matt.jpg" alt=""/>

                    <p>Matt Krstic<span>Neo Traditional Style</span></p>
                </div>
            </div>

            <div class="tattoo-art-contact">
                <picture>
                    <source media="(max-width:500px)" srcset="/images/TattooArtists/contact-us-mobile-background.png"/>
                    <img className="contact-background" src="/images/TattooArtists/contact-us-background.png" alt=""/>
                </picture>

                <div className='text padding-inline'>
                    <h2>Looking to guest spot at our shop?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.ut.</p>
                    <Link className="tattoo-art-contact-btn" to="/create">Contact Us</Link>
                </div>
            </div>
        </section>
    </>
    );
}

export default TattooArtists; 