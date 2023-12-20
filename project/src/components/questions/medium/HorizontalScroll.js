import '../../../css/horizontalScroll.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';

export default function HorizontalScroll() {
    const wrongClick = () => {
        document.getElementById('wrong-btn').innerHTML = ('Wrong button clicked!');
    }

    const correctClick = () => {
        document.getElementById('correct-btn').innerHTML = ('Button 9 clicked!');
    }

  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Horizontal Scroll"} question={ <ul className='question-ul'>
                <li>Horizontally scroll to 'Button 9'</li>
                <li>Click on 'Button 9'</li>
                <li>Print the text displayed</li>
            </ul> } />
    </div>
        <div className='row horizontal-scroll'>
            <button className='scroll-btn' onClick={ wrongClick }>Button 1</button>
            <button className='scroll-btn' onClick={ wrongClick }>Button 2</button>
            <button className='scroll-btn' onClick={ wrongClick }>Button 3</button>
            <button className='scroll-btn' onClick={ wrongClick }>Button 4</button>
            <button className='scroll-btn' onClick={ wrongClick }>Button 5</button>
            <button className='scroll-btn' onClick={ wrongClick }>Button 6</button>
            <button className='scroll-btn' onClick={ wrongClick }>Button 7</button>
            <button className='scroll-btn' onClick={ wrongClick }>Button 8</button>
            <button className='scroll-btn' onClick={ correctClick }>Button 9</button>
            <button className='scroll-btn' onClick={ wrongClick }>Button 10</button>
        </div>
        <div className='output-txt'>
            <p id='wrong-btn'></p>
            <p id='correct-btn'></p>
        </div>
    <SubmitAnswer nextLink={ <Link to='/sliderDrag' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
