import '../../../css/svgHandling.css';
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import butterfly from '../../../images/butterfly.png';
import svg1 from '../../../images/svg1.svg';
import { ReactSVG } from 'react-svg';

export default function SvgHandling() {
    const handleClick = () => {
        document.getElementById('svg-p').innerHTML = 'SVG was clicked!';
    }

  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"SVG Handling"} question={ <ul className='question-ul'>
                <li>Locate the SVG from the image and SVG given below   </li>
                <li>Click on the SVG</li>
                <li>Retrieve the text displayed</li>
            </ul> } />
        <div className='svg-handling'>
            <img src={ butterfly } alt='butterfly' id='butterfly'/>
            <ReactSVG src={svg1} onClick={handleClick} />
            <p id='svg-p'></p>
        </div>

    </div>
    <SubmitAnswer nextLink={ <Link to='/toastMessage' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
