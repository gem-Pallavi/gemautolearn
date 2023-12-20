import '../../../css/carousel.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from "../SubmitAnswer";
import { Link } from "react-router-dom";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function CarouselComponent() {
  return (
    <>
    <Navigation />
    <div className='container'>
      <Question quesTitle={"Carousel"} question={<ul className='question-ul'>
              <li>Wait for 3 seconds and get the title of the active slide</li>
              <li>Verify that the slide is active</li>
              <li>Navigate to the second slide by clicking the arrow</li>
              <li>Get the title of the second slide</li>
        </ul>} 
      />
      <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem interval={3000}
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        alt='...'
      >
        <h5 className='carousel-heading'>Living on the edge</h5>
      </MDBCarouselItem>

      <MDBCarouselItem interval={3000}
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      >
        <h5 className='carousel-heading'>Starry Night</h5>
      </MDBCarouselItem>

      <MDBCarouselItem interval={3000}
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        <h5 className='carousel-heading'>It was all Yellow</h5>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
    <SubmitAnswer nextLink={<Link to='/childWindow' className='next-link'>Next Question</Link>} />
    <Footer />
    </>
  );
}
