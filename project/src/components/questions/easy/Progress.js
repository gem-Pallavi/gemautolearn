import '../../../css/progressBar.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Progress() {
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);

  const startProgress = () => {
    setRunning(true);
  }

  const stopProgress = () => {
    setRunning(false);
  }

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (progress < 100) {
          setProgress((prevProgress) => prevProgress + 1);
        } else {
          clearInterval(interval);
          setRunning(false);
        }
      }, 100); 
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running, progress]);

  return (
    <>
    <Navigation />
    <div className='container'>
      <Question quesTitle={ "Progress Bar" } question={ <ul className='question-ul'>
                <li>Locate the progess bar on the web page</li>
                <li>Click on start button so that the progression starts in the progress bar</li>
                <li>Click on stop button after 5 seconds to stop the progress</li>
                <li>Verify the percentage of progress in the progress bar </li>
            </ul> } />
      <div className='row'>
        <button onClick={startProgress} className='progress-btn'>Start</button>
        <button onClick={stopProgress} className='progress-btn' id='progress-btn-stop'>Stop</button>
      </div>
        
      <div className="container progress-bar" style={{ width: `${progress}%` }}>{progress}%</div>
    </div>
    <SubmitAnswer nextLink={ <Link to='/progressingForward' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
};
