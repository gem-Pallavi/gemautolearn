import '../../../css/longpress.css'
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';

export default function LongPress() {
    let delay = 500
    let startPress = null

    const mouseDown = () => {
        startPress = Date.now();
    }

    const mouseUp = () => {
        let text;
        if(Date.now() - startPress > delay) {
            text = "Longpress performed"
            document.getElementById("press-text").innerHTML = text;
        }
    }

  return (
    <>
    <Navigation/>
    <div className='container longpress'>
        <Question quesTitle={"Longpress"} question={<ul className='question-ul'>
                <li>Perform longpress action on the button 'Longpress'</li>
                <li>Verify if any changes are reflected on the page</li>
            </ul>} />
        <button onMouseDown={mouseDown} onMouseUp={mouseUp} id='longpress-btn'>Longpress</button>
        <p id='press-text' />
    </div>
    <SubmitAnswer nextLink={ <Link to='/popup' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
