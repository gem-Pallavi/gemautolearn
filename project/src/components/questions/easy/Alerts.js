import '../../../css/alert.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import DesktopNotification from './DesktopNotifications';

export default function Alerts() {
    const simpleAlert = () => {
        let text;
        window.alert("This is an alert!");
            text = "Confirmed!";
        document.getElementById("simple-text").innerHTML = text;
    }

    const confirmAlert = () => {
        let text = "Click Ok or Cancel";
        if (window.confirm(text) == true) {
            text = "Confirmed!";
        } else {
            text = "Cancelled";
        }
        document.getElementById("confirmation-text").innerHTML = text;
    }

    const promptAlert = () => {
        let output;
        let name = prompt("Enter your name: ", "Sample text");
        if(name == "" || name == null) {
            output = "Prompt cancelled";
        } else {
            output = "Hello " + name + "!"; 
        }
        document.getElementById("prompt-text").innerHTML = output;
    }

    return (
        <>
        <Navigation />
        <div className='container alert-component'>
            <Question quesTitle={"Alerts"} question={<ul className='question-ul'>
                <li>Accept alert on the webpage i.e button named Simple Alert</li>
                <li>Switch to the alert, retrieve its text and accept it.</li>
                </ul>} />
            <div className='row simple'>
                <button onClick={simpleAlert} className="alert-btn">Simple Alert</button>
            </div>
            <div className='row confirm'>
                <button onClick={confirmAlert} className="alert-btn" id='confirm-btn'>Confirmation Alert</button>
            </div>
            <div className='row prompt'>
                <button onClick={promptAlert} className="alert-btn" id='prompt-btn'>Prompt Alert</button>
            </div>
            <div className='row alert-texts'>
                <p id="simple-text" className='alert-text'></p>
                <p id="confirmation-text" className='alert-text'></p>
                <p id="prompt-text" className='alert-text'></p>
            </div>
            <div className='row notif'>
                <DesktopNotification />
            </div>
        </div>
        {/* <div className='container side-img'>
            <img src={alert} alt='' className='question-vector'/>
        </div> */}
        <SubmitAnswer nextLink={ <Link to='/buttons' className='next-link'>Next Question</Link> } />
        <Footer />
        </>
    );
}