import '../../../css/hover.css';
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';

export default function Hover() {
    const handleHover = () => {
        document.getElementById('hover-txt').innerHTML='Button was hovered!';
    }

  return (
    <>
        <Navigation />
        <div className='container hover'>
            <Question quesTitle={"Hover"} question={ <ul className='question-ul'>
              <li>Navigate to the button "Hover over me"</li>
              <li>Verify that the button has been hovered upon</li>
            </ul> } />
            <button className='hover-btn' onMouseEnter={handleHover}>Hover over me</button>
            <p id='hover-txt' />
        </div>
        <SubmitAnswer nextLink={ <Link to='/fileUpload' className='next-link'>Next Question</Link> } />
        <Footer />
    </>
  );
};
