import '../../../css/radioCheck.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';

export default function RadioCheck() {
  return (
    <>
    <Navigation />
    <div className='container radio-check'>
        <Question quesTitle={"Radio Buttons and Checkboxes"} question={<ul className='question-ul'>
                <li>Select the radio button with 'Iron Man' among multiple options</li>
                <li>Verify if the radio button with 'Iron Man' has bee selected or not</li>
                <li>Select the checkboxes with 'Red', 'Black' among multiple options</li>
                <li>Verify if the checkboxes have been selected or not</li>
            </ul>} />

        <div className='container radio'>
            <h5>Radio Buttons: </h5>
            <input type='radio' value='captainAmerica' className='radio-btn' />
            <label className='radio-label'>Captain America</label>
            <input type='radio' value='ironMan' className='radio-btn' />
            <label className='radio-label'>Iron Man</label>
            <input type='radio' value='bucky' className='radio-btn' />
            <label className='radio-label'>Bucky Barnes</label>
        </div>

        <div className='container check'>
            <h5>Checkboxes: </h5>
            <input type='checkbox' value='red' className='checkbox' />
            <label className='checkbox-label'>Red</label> 
            <input type='checkbox' value='blue' className='checkbox' />
            <label className='checkbox-label'>Blue</label> 
            <input type='checkbox' value='black' className='checkbox' />
            <label className='checkbox-label'>Black</label> 
            <input type='checkbox' value='yellow' className='checkbox' />
            <label className='checkbox-label'>Yellow</label>
        </div>

    </div>
    <SubmitAnswer nextLink={ <Link to='/dragdrop' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
};
