import '../../../css/brokenLinks.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';

export default function BrokenLink() {
  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Broken Links"} question={ <ul className='question-ul'>
            <li>Find the broken links from the links given below</li>
            <li>Print the number of broken links</li>
        </ul> } />

        <div className='container broken-links'>
            <a href='http://malformed/url.com' className='broken-link'>Link 1</a>
            <a href='http://www.google.com' className='broken-link'>Link 2</a>
            <a href='http://samsam.com/' className='broken-link'>Link 3</a>
            <a href='http://www.facebook.com' className='broken-link'>Link 4</a>
        </div>
    </div>
    <SubmitAnswer nextLink={ <Link to='/masteryUnleashed' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
