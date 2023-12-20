import '../../../css/resizeTextbox.css'
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';

export default function ResizeTextbox() {
  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Resize Textbox"} question={ <ul className='question-ul'>
                <li>Drag the textbox to increase its height</li>
                <li>Print the new height of the textbox</li>
                <li>Enter 'Hello!' in the textarea</li>
            </ul> } />
        <div className='container resize-textbox'>
            <textarea rows='4' cols='40'></textarea>
        </div>
    </div>
    <SubmitAnswer nextLink={ <Link to='/autocomplete' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
