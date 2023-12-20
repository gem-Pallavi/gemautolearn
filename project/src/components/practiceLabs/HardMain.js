import Difficulty from "./Difficulty";
import '../../css/difficulty.css';
import QuestionTile from '../questions/QuestionTile';
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import bgVid from '../../images/bgVid.mp4';
import FooterWhite from "../FooterWhite";

export default function HardMain() {
    return (
        <>
        <Navigation />
        <video autoPlay loop muted playsInline id='background-practice' className="bg1">
            <source src={bgVid} type="video/mp4" />
        </video>
        <div className="container">
            <Difficulty level={"Mastery Unleashed"} desc={"Where the elite prove their mettle, demonstrating unwavering determination and resilience as they navigate a challenging landscape, ultimately achieving greatness amidst the most formidable trials that test their true potential!"}/>
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
            <div className='row questions-easy'>
                <QuestionTile qTitle={"Graphs"} qDescription={"Graphs, also known as charts, visually represent data using points, lines, bars, or other elements to illustrate relationships, trends, and comparisons, aiding data analysis"} start={<Link to='/graphs' className='component-link' >Start</Link>} />
                <QuestionTile qTitle={"Bouncing Ball"} qDescription={"A bouncing ball challenge involves users calculating the number of times a ball bounces within a specified time to check their skills and interactions with web elements"} start={<Link to='/bouncingBall' className='component-link' >Start</Link>} />
                <QuestionTile qTitle={"Sorting"} qDescription={"Sorting is a process in which data is arranged systematically, typically in ascending or descending order, aiding organization and quick retrieval of information"} start={<Link to='/sortable' className='component-link' >Start</Link>} />
            </div>
            <div className='row easy-bottom'>
                <QuestionTile qTitle={"Carousel"} qDescription={"A carousel is a user interface element that displays a rotating set of images in a continuous loop, often used for showcasing featured items or advertisements"} start={<Link to='/carousel' className='component-link' >Start</Link>} />
                <QuestionTile qTitle={"Child Window"} qDescription={"A child browser window, typically a popup or new tab, is a secondary browser instance opened from the parent window to display additional content or interact with the main page"} start={<Link to='/childWindow' className='component-link' >Start</Link>} />
                <QuestionTile qTitle={"Form"} qDescription={"The ultimate challenge! A form is a structured document or webpage element used to collect and submit data, often containing fields for user input and submission buttons"} start={<Link to='/form' className='component-link' >Start</Link>} />
            </div>
        </div>
        <FooterWhite />
        </>
    );
}