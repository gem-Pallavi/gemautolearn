import '../../css/goal.css';
import { useState, useEffect, useRef } from 'react';
import Navigation from "../Navigation";
import FooterWhite from "../FooterWhite";
import challenge from '../../images/challenge.png';
import hardKnowledge from '../../images/hardKnowledge.png';
import GoalCard from './GoalCard';
import TechDropdown from '../TechDropdown';
import { TechStack } from './TechStack';
import bgVid from '../../images/bgVid.mp4';
import { Link } from 'react-router-dom';
import centerlaptop from '../../images/centerlaptop.png';
import laptop from '../../images/laptop.png';
import emoji from '../../images/emoji.png';
import { ReactSVG } from 'react-svg';
import Ellipse from '../../images/Ellipse.svg';
import user from '../../images/user.png';
import progress from '../../images/progress.png';
import practiceLabs from '../../images/practiceLabs.mp4';

export default function Goal() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  const [value, setValue] = useState("");
  const [showGoal, setShowGoal] = useState(false);
  const goalRef = useRef(null);

  const handleTechChange = (val) => {
    if (val) { 
      setValue(val);
      setShowGoal(true);
    } else {
      setShowGoal(false);
    }
  };

  useEffect(() => {
    if (showGoal && goalRef.current) {
      goalRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showGoal]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navigation />
      <video autoPlay loop muted playsInline id='background-practice' className="bg1">
        <source src={bgVid} type="video/mp4" />
      </video>
      <div className="container tech-stack">
        <h3>Select Tech Stack</h3>
        <TechDropdown
          options={TechStack}
          label="name"
          id="id"
          selectedVal={value}
          handleChange={handleTechChange}
        />
      </div>
      <div id="right-div">
        <div id='center-laptop'>
          <img src={centerlaptop} alt='' id='centered-laptop-img' />   
        </div> 
        <div>
          <img src={laptop} alt='' id='laptop-screen'/>
          <img src={progress} alt='' id='inside-laptop'/>
        </div>
        <div id='feedback-top'>
          <img src={user} alt='' id='user'/>
          <p id='user-review'>"The interactive courses and practice <br /> labs are very informative and engaging!"</p>
        </div>
        <div id='icon-bottom'>
          <img src={emoji} alt='' id='icon-landing' />
        </div>
        <div id='ellipse-div'>
          <ReactSVG src={Ellipse} id='ellipse'/>
        </div>
        {/* <video autoPlay loop muted playsInline id='practiceLabsVid'>
          <source src={practiceLabs} type="video/mp4" />
        </video> */}
      </div>
      {showGoal && (
        <>
          <div ref={goalRef} id="set-goal" className="container set-your-goal">
            <h3>Set your goal</h3>
            <div className="row goals">
              <Link to="/practice" onClick={scrollToTop} id='goal-link'>
                <GoalCard goalImg={challenge} goalHeading={"Everything you need to know"} goalContent={"A curated hub of questions to unlock insights, gain clarity, and elevate your understanding effortlessly"} />
              </Link>
              &emsp;&emsp;&emsp;
              <Link to="/comingSoon" onClick={scrollToTop} id='goal-link-1'>
                <GoalCard goalImg={hardKnowledge} goalHeading={"Expert Zone"} goalContent={"Elevate your expertise and conquer the complexities in this exclusive realm of advanced questions"} />
              </Link>
            </div>
          </div>
        </>
      )}
      <FooterWhite />
      {/* <Footer /> */}
    </>
  );
}
