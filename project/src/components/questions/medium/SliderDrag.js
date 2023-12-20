import '../../../css/slider.css';
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
// import Slider from 'react-custom-slider';
import { useState } from 'react';
import { Slider } from 'rsuite'

export default function SliderDrag() {
  const [value, setValue] = useState(0);
  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Slider"} question={ <ul className='question-ul'>
                <li>Drag the slider to 50</li>
                <li>Verify that the slider was dragged till 50</li>
            </ul> } />
        <div className='container slider'>
            <Slider
            className='slider-main'
              progress
              defaultValue={0}
              onChange={(value) => setValue(value)}
              valueRenderer={(value) => `${value}%`}
            />
            <p id='slider-text'>Slider dragged till: {value}</p>
        </div>
    </div>
    <SubmitAnswer nextLink={ <Link to='/brokenLink' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
