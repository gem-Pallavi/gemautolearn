import '../../css/assignments.css';
import { useEffect } from 'react';
import Navigation from "../Navigation";
import Easy from "./Easy";
import Difficulty from "./Difficulty";
import Intermediate from "./Intermediate";
import Advance from "./Advance";
import { ReactSVG } from 'react-svg';
import Circle from '../../images/Circle.svg';
import lineHorizontal from '../../images/lineHorizontal.png';
import lineVertical from '../../images/lineVertical.png';
import PageTop from "../PageTop";
import bgVid from '../../images/bgVid.mp4';
import FooterWhite from "../FooterWhite";

export default function Assignments() {
    useEffect(() => {
        window.scrollTo(0,0);
      }, []);
    
    return (
        <>
        <Navigation/>
        <video autoPlay loop muted playsInline id='background-practice' className="bg1">
            <source src={bgVid} type="video/mp4" />
        </video>
        <div className="container practice">
            <h2>Practice Labs</h2>
            <p className="container">Dive into the dynamic realm of our 'Practice Labs', 
            where learning meets excitement. From breezy warm-ups to brain-bending challenges, 
            this section is your playground for mastering skills through a thrilling spectrum of 
            practice questions</p>
        </div>

        <div id="practice-page-top">
            {/* <PageTop /> */}
        </div>

        <ReactSVG src={Circle} className='circle-svg'/>
        <img src={lineHorizontal} className="horizontal-line"/>
        <img src={lineVertical} className="vertical-line"/>

        <div className="all-difficulties">
            <Difficulty level={"The Beginning"} desc={"An inspiring journey that marks your exciting kickoff to excellence, expertly crafted for beginners who are ready to shine and embark on a transformational path of growth and achievement!"} />
            <Easy />
        </div>

        <ReactSVG src={Circle} className='circle-svg'/>
        <img src={lineHorizontal} className="horizontal-line"/>
        <img src={lineVertical} className="vertical-line"/>

        <div className="all-difficulties">    
            <Difficulty level={"Progressing Forward"} desc={"A thrilling phase where your skills evolve, challenges intensify, and your journey towards mastery and expertise takes flight, guiding you to new heights of personal and professional achievement!"} />
            <Intermediate />
        </div>

        <ReactSVG src={Circle} className='circle-svg'/>
        <img src={lineHorizontal} className="horizontal-line"/>

        <div className="all-difficulties">
            <Difficulty level={"Mastery Unleashed"} desc={"Where the elite prove their mettle, demonstrating unwavering determination and resilience as they navigate a challenging landscape, ultimately achieving greatness amidst the most formidable trials that test their true potential!"} />
            <Advance />
        </div>

        <FooterWhite/>
        </>
    );
}