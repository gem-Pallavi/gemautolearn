import '../../../css/buttons.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';

import React from 'react'

export default function Button() {
    const singleClick = () => {
        let text;
        text = "Single click performed";
        document.getElementById("single-text").innerHTML = text;
    }

    const doubleClick = () => {
        let text;
        text = "Double click performed";
        document.getElementById("double-text").innerHTML = text;
    }

    const contextClick = () => {
        let text;
        text = "Context click performed";
        document.getElementById("rightClick-text").innerHTML = text;
    }

  return (
    <>
    <Navigation />
    <div className='container buttons-question'>
        <Question quesTitle={"Buttons"} question={<ul className='question-ul'><li>Perform a click operation on 'Single Click' button on the webpage</li>
        <li>Verify if any changes have been reflected on the page</li>
        <li>Perform a double click on a button i.e 'Double Click' button</li>
        <li>Verify if any changes have been reflected on the page</li></ul>}/>
        <div className='row single'>
                <button className="click-btn" onClick={singleClick}>Single Click</button>
        </div>
        <div className='row double'>
            <button className="click-btn" id='doubleClick-btn' onDoubleClick={doubleClick}>Double Click</button>
        </div>
        <div className='row context'>
            <button className="click-btn" id='rightClick-btn' onContextMenu={contextClick}>Context Click</button>
        </div>
        <div className='row click-texts'>
            <p id="single-text" className='click-text'></p>
            <p id="double-text" className='click-text'></p>
            <p id="rightClick-text" className='click-text'></p>
        </div>
    </div>
    <SubmitAnswer nextLink={ <Link to='/theme' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}

