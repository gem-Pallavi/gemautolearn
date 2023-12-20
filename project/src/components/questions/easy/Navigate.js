import '../../../css/navigate.css';
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import navigateIcon from '../../../images/navigateIcon.PNG';

export default function Navigate() {
  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Navigate"} question={ <ul className='question-ul'>
              <li>Navigate to the the "Gemini Solutions" icon</li>
              <li>Perform the click functionality on that icon</li>
              <li>Verify if driver is been navigated to corresponding website</li>
            </ul> } />

        <div className='container navigate'>
            <a href='https://www.geminisolutions.com/' target='_blank'><img src={ navigateIcon } alt='Gemini' className='navigate-icon'/></a>
        </div>
    </div>
    <SubmitAnswer nextLink={ <Link to='/progressBar' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
};
