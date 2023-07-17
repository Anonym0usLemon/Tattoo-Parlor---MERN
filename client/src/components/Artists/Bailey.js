import react from 'react'; 
import { Link } from 'react-router-dom';

const Bailey = () => {
    return (
        <>
            <div className="secondary-banner">	
                <img className="about-background" src="/images/Piercings/piercings-background.jpg" alt=""/>
            </div>

            <section className='Bio padding-inline'>
                <Link className="mobile-crumb" to="/TattooArtists"> &lt; Back to Artists</Link>

                <img className='artist-image' src="images/TattooArtists/Bailey.jpg" alt=""/>

                <div className='text'>
                    <Link className="desktop-crumb" to="/TattooArtists"> &lt; Back to Artists</Link>

                    <h1>
                        Bailey Renee
                        <span>Tattoo Artist</span>
                    </h1>
                    
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum 
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.ut.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum 
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.ut.=
                    </p>

                    <Link className="schedule-apt-button" to="/create">
                        <img src="/images/Home/schedule-apt-left-btn.png" alt="" />    
                        Schedule Appointment
                        <img src="/images/Home/schedule-apt-right-btn.png" alt="" />
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Bailey; 