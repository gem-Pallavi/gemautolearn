import '../../../css/brokenImages.css';
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import SubmitAnswer from '../SubmitAnswer';
import Question from '../Question';
import blank from '../../../images/blank.jpg';
import { Link } from 'react-router-dom';

export default function BrokenLinks() {
  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Broken Images"} question={ <ul className='question-ul'>
                <li>Identify broken images from the images given below</li>
                <li>Count and print the number of broken images</li>
            </ul> } />
        <div className='container broken-images'>
            <img src='error' />
            <img src={blank} alt='...' />
            <img src='error' />
        </div>
    </div>
    <SubmitAnswer nextLink={<Link to='/resizeTextbox' className='next-link'>Next Question</Link>} />
    <Footer />
    </>
  );
}
