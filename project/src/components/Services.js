import '../css/services.css';
import { ReactSVG } from 'react-svg';
import Arrow from '../images/Arrow.svg';
import { useNavigate } from 'react-router-dom';
import PageTop from './PageTop';
import courses from '../images/courses.png';
import practice from '../images/practice.png';
import expert from '../images/expert.png';

export default function Services () {
    let navigate = useNavigate();
    const routePractice = () => {
        let path = '/setYourGoal';
        navigate(path);
    }

    const routeComingSoon = () => {
        let path = '/comingSoon';
        navigate(path);
    }

    const routeCourses = () => {
        let path = '/courses';
        navigate(path);
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    

    return (
        <section id='services-main'>
            <div id="left-heading">
                <h1>What We Offer</h1>
                <p id="sub-heading1">Unlock the Mastery of Quality Assurance</p>
                <p id="browse-subheading">Browse everything</p>
                <ReactSVG src={Arrow} id='arrow'/>
            </div>

            <div id='right-cards'>
                <div id='card1' className='services-card'>
                    <img src={ courses } alt='' className='services-icon'/>
                    <h2 className='card-heading'>Interactive Courses</h2>
                    <p className='card-content'>Gain access to an extensive array of interactive 
                    courses that encompass a wide spectrum of automation testing techniques. 
                    Tailor your learning experience to your preferred pace.</p>
                    <button className='card-button' onClick={ () => {scrollToTop(); routeCourses(); }}>Start</button>    
                </div>
                <div id='card2' className='services-card'>
                    <img src={ practice } alt='' className='services-icon'/>
                    <h2 className='card-heading'>Practice Labs</h2>
                    <p className='card-content'>Elevate your testing proficiency by engaging 
                    in authentic, real-world scenarios through our practice labs. 
                    Gauge your performance accurately.</p>
                    <button className='card-button' id='card2-button' onClick={ () => {scrollToTop(); routePractice(); }}>Start</button>    
                </div>
                <div id='card3' className='services-card'>
                    <img src={ expert } alt='' className='services-icon'/>
                    <h2 className='card-heading'>Expert Guidance</h2>
                    <p className='card-content'>Experience accelerated growth in your 
                    software testing career by being mentored by our experts. 
                    Receive guidance, and deep insights into software testing.</p>
                    <button className='card-button' onClick={ () => {scrollToTop(); routeComingSoon(); }}>Start</button>    
                </div>
            </div>        
        </section>
    )
}
