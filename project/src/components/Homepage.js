import '../css/homepage.css';
import Services from '../components/Services';
import Software from '../components/Software';
import Benefits from '../components/Benefits';
import Navigation from './Navigation';
import Footer from './Footer';
import { useEffect } from 'react';
import PageTop from './PageTop';
import bgVid from '../images/bgVid.mp4';

export default function Homepage() {
    useEffect(() => {
        window.scrollTo(0,0);
      }, []);

    const openLogin = () => {
        window.open('/login', '_blank', 'noopener,noreferrer');
    }

    const openSignUp = () => {
        window.open('/signup', '_blank', 'noopener,noreferrer');
    }

    return (
        <>
        <Navigation />  
        <section id='common'>
      <video autoPlay loop muted playsInline id='background-video'>
        <source src={bgVid} type="video/mp4" />
      </video>
      <div id="left-div">
            <h2>Learn Automation Software Testing</h2>
            <p>Begin Your Automation Chronicle</p>
            <button id="login-btn" className='login-signup' onClick={() => { openLogin(); }}>Login</button>
            <button id="signup-btn" className='login-signup' onClick={() => { openSignUp(); }}>Signup</button>
        </div>
    </section>
        <PageTop />
        <Services />
        <Software />
        <Benefits />
        <Footer />
        </>
    );
}