import '../../../css/accordion.css';
import Footer from "../../Footer";
import Navigation from "../../Navigation";
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

export default function AccordianComponent() {
  return (
    <>
    <Navigation />
    <div className="container">
      <Question quesTitle={"Accordion"} question={ <ul className='question-ul'>
          <li>Print the heading of first Accordian</li>
          <li>Click on the arrow to expand the first Accordion</li>
          <li>Print the text displayed on expanding the first accordion</li>
          <li>Print the heading of second Accordian</li>
          <li>Click on the arrow to expand the second Accordion</li>
          <li>Print the text displayed on expanding the second acoordion</li>
          <li>Verify that the first accordion collapses on expanding the second accordion</li>
      </ul> } />
      <div className="container accordion">
        <Accordion className='accordion-main'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Practice Labs</Accordion.Header>
            <Accordion.Body>
              Hone your testing skills in real-world scenarios with our practice labs. 
              Test applications, identify bugs, and build a strong testing portfolio 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Expert Guidance</Accordion.Header>
            <Accordion.Body>
              Experience accelerated growth in your software testing career by being mentored by our experts. 
              Receive guidance, and deep insights into software testing.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
    <SubmitAnswer nextLink={ <Link to='/activeTab' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
