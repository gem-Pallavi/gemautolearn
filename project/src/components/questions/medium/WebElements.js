import '../../../css/webElements.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import turningRed from '../../../images/turningRed.jpg';
import incredibles from '../../../images/incredibles.jpg';
import insideOut from '../../../images/insideOut.png';
import elemental from '../../../images/elemental.png';
import up from '../../../images/up.jpeg';

export default function WebElements() {
  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Web Elements"} question={ <ul className='question-ul'>
            <li>Count the number of movies with the class name: 'movies'</li>
            <li>Print the count</li>
            <li>Count the number of movies with the class name: 'logos'</li>
            <li>Print the count</li>
        </ul> } />

        <div className='container web-element'>
            <div className='row movie1'>
                <img src={turningRed} alt='' className='movies'/>
                <img src={incredibles} alt='' className='logos'/>
                <img src={insideOut} alt='' className='movies' />
            </div>
            <div className='row movie2'>
                <img src={elemental} alt='' className='logos' />
                <img src={up} alt='' className='movies' />
            </div>
        </div>
    </div>
    <SubmitAnswer nextLink={<Link to='/brokenImages' className='next-link'>Next Question</Link>} />
    <Footer />
    </>
  );
}
