import '../../../css/popupWindow.css';
import 'reactjs-popup/dist/index.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import Popup from 'reactjs-popup';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';

export default function PopupWindow() {
  return (
    <>
    <Navigation/>
    <div className='container popup'>
        <Question quesTitle={"Popup"} question={<ul className='question-ul'>
                <li>Perform the click operation on button 'Popup'</li>
                <li>Verify if any popup window or dialog box appears</li>
                <li>Extract the text inside the popup and close the popup</li>
            </ul>} />
        <Popup trigger={<button id='popup-btn'>Click for Popup!</button>}>
            <div className='popup-text'>Hi, I am the text inside the popup!</div>
        </Popup>
    </div>
    <SubmitAnswer nextLink={ <Link to='/radioCheck' className='next-link'>Next Question</Link> } />
    <Footer/>
    </>
  )
}


