import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function ChildWindowPopUp() {
    const openWindow = () => {
        const url = 'http://localhost:3000/child'; 
        const windowName = 'ChildWindow';
        const windowFeatures = 'width=600,height=400';

        const childWindow = window.open(url, windowName, windowFeatures);
    }

  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Child Window"} question={<ul className='question-ul'>
              <li>Click on the 'Click Me!' button to open child window</li>
              <li>Enter your name in the input box</li>
              <li>Close the child window</li>
            </ul>} 
        />
        <div className='container child-window'>
            <Button variant='success' onClick={openWindow} id='longpress-btn'>Click Me!</Button>
        </div>
    </div>
    <SubmitAnswer nextLink={<Link to='/form' className='next-link'>Next Question</Link>} />
    <Footer />
    </>
  );
}
