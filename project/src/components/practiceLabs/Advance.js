import '../../css/difficulty.css';
import QuestionTile from '../questions/QuestionTile';
import { ReactSVG } from 'react-svg';
import Arrow from '../../images/Arrow.svg';
import { Link } from 'react-router-dom';

export default function Intermediate() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div className='container'>
            <div className='row questions-easy'>
                <QuestionTile qTitle={"Accordion"} qDescription={"A user interface component that expands and collapses content sections, optimizing screen space and enhancing information organization in websites and apps"} start={<Link to='/accordian' className='component-link' >Start</Link>} />
                <QuestionTile qTitle={"Active Tab"} qDescription={"The active tab is the currently selected or open tab in a web browser or software interface, indicating the page or content currently being viewed or interacted with"} start={<Link to='/activeTab' className='component-link' >Start</Link>} />
                <QuestionTile qTitle={"Drag and Drop 2"} qDescription={"Drag and drop with a constrained axis enables users to move elements along a specific horizontal or vertical direction, maintaining alignment on one axis while dragging"} start={<Link to='/dragDropAxis' className='component-link' >Start</Link>} />
            </div>
            <div className='row easy-bottom'>
                <QuestionTile qTitle={"Web Table"} qDescription={"A web table is a structured grid of data presented on a webpage, organized in rows and columns, often used to display and arrange information for easy reference or analysis"} start={<Link to='/webTable' className='component-link' >Start</Link>} />
                <QuestionTile qTitle={"File Download"} qDescription={"File download is the process of retrieving digital files from a remote server to a local device, allowing users to save, view, or use the downloaded content"} start={<Link to='/fileDownload' className='component-link' >Start</Link>} />
                <QuestionTile qTitle={"Date Time Picker"} qDescription={"A date-time picker is a user interface component that enables users to select both a date and a time, often used for scheduling or inputting precise timestamps"} start={<Link to='/dateTime' className='component-link' >Start</Link>} />
            </div>
            <div className='row easy-button'>
                <button className='browse'>
                    <Link to="/advance-main" className='browse-link' onClick={scrollToTop}>Browse Everything
                    <ReactSVG src={Arrow} className='browse-arrow'/>
                    </Link>
                </button>
            </div>
        </div>
    );
}