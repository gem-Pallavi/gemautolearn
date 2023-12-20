import '../../../css/bouncingBall.css';
import Footer from "../../Footer";
import Navigation from "../../Navigation";
import Question from "../Question";
import SubmitAnswer from "../SubmitAnswer";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BouncingBall() {
    const [isBouncing, setIsBouncing] = useState(false);
    const [bounceCount, setBounceCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null); // Declare intervalId

    const handleBounceToggle = () => {
        setIsBouncing(prevState => !prevState);
        if (!isBouncing) {
            const newIntervalId = setInterval(() => {
                setBounceCount(prevCount => prevCount + 1);
            }, 2000);
            setIntervalId(newIntervalId); 
        } else {
            clearInterval(intervalId); 
        }
    };

    return (
        <>
            <Navigation />
            <div className="container">
                <Question quesTitle={"Bouncing Ball"} question={<ul className='question-ul'>
                    <li>Get the number of times the ball bounces in 10 seconds</li>
                    <li>Get the number of times the ball bounces in 20 seconds</li>
                </ul>} />

                <div className="container bouncing-ball">
                    <div className={`ball ${isBouncing ? 'bouncing' : ''}`}></div>
                    <button onClick={handleBounceToggle} className='ball-button'>
                        {isBouncing ? 'Stop Bouncing' : 'Start Bouncing'}
                    </button>
                    <div className="bounce-count">Bounce Count: {bounceCount}</div>
                </div>
            </div>
            <SubmitAnswer nextLink={<Link to='/sortable' className='next-link'>Next Question</Link>} />
            <Footer />
        </>
    );
}
