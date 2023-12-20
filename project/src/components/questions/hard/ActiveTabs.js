import '../../../css/activeTabs.css';
import Footer from "../../Footer";
import Navigation from "../../Navigation";
import Question from "../Question";
import SubmitAnswer from "../SubmitAnswer";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

export default function ActiveTabs() {
    const tab1 = () => {
        document.getElementById('tab1-content').innerHTML = "You've clicked on Tab 1";
    }

    const tab2 = () => {
        var element = document.getElementById("tab1-content");
        element.innerHTML = "You've clicked on Tab 2";
    }

  return (
    <>
    <Navigation />
    <div className="container">
        <Question quesTitle={"Active Tab"} question={ <ul className='question-ul'>
            <li>Click on Tab 1</li>
            <li>Print the text displayed on clicking Tab 1</li>
            <li>Click on Tab 2</li>
            <li>Verify that Tab 2 is an active tab</li>
        </ul> } />
        <div className="container active-tabs">
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link className='tabs' eventKey="link-1" onClick={ tab1 }>Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='tabs' eventKey="link-2" onClick={ tab2 }>Tab 2</Nav.Link>
                </Nav.Item>
            </Nav>
            </div>
            <div className="row tab-text">
                <p id="tab1-content"></p>
            </div>
    </div>
    <SubmitAnswer nextLink={ <Link to='/dragDropAxis' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
