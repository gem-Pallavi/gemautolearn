import Difficulty from "./Difficulty";
import '../../css/difficulty.css';
import { Link } from 'react-router-dom';
import QuestionTile from '../questions/QuestionTile';
import Navigation from "../Navigation";
import bgVid from '../../images/bgVid.mp4';
import FooterWhite from "../FooterWhite";

export default function EasyMain() {
    return (
        <>
        <Navigation/>
        <video autoPlay loop muted playsInline id='background-practice' className="bg1">
            <source src={bgVid} type="video/mp4" />
        </video>

        <div className="container">
            <Difficulty level={"The Beginning"} desc={"An inspiring journey that marks your exciting kickoff to excellence, expertly crafted for beginners who are ready to shine and embark on a transformational path of growth and achievement!"}/>
            <div className='row questions-easy'>
                <QuestionTile qTitle={"Alerts"} qDescription={"Alerts are web pop-up notifications used for user interaction and information display or prompt user actions in web applications, enhancing user experience"} start={<Link to='/alerts' className='component-link' >Start</Link>} />
                <QuestionTile qTitle={"Buttons"} qDescription={"Buttons are interactive elements on websites. Click is commonly used to perform actions such as submitting forms, activating buttons, while double click is two rapid clicks"} start={<Link to='/buttons' className='component-link' >Start</Link>} />   
                <QuestionTile qTitle={"Toggle Theme"} qDescription={"Background change on click is an interactive web feature where a new color is displayed when a user clicks, enhancing user experience and visual engagement"} start={ <Link to='/theme' className='component-link'>Start</Link>} />
            </div>
            <div className='row easy-bottom'>
                <QuestionTile qTitle={"Dropdown"} qDescription={"A dropdown is a user interface element that presents a list of options when clicked or hovered over, allowing users to select from available choices efficiently"} start={ <Link to="/dropdown" className='component-link'>Start</Link>} />
                <QuestionTile qTitle={"Longpress"} qDescription={"Longpress to select is an input method where a user holds down on an item or element for an extended duration to activate a contextual menu or perform an action"} start={ <Link to="/longpress" className='component-link'>Start</Link>} />
                <QuestionTile qTitle={"Popup"} qDescription={"A popup is a small graphical user interface element that appears temporarily on top of a webpage or application to display additional information or options"} start={ <Link to="/popup" className='component-link'>Start</Link>} />
            </div>
            <div className='row easy-bottom'>
                <QuestionTile qTitle={"Radio Button & Checkboxes"} qDescription={"Radio buttons allow users to select one option from a list, while checkboxes permit multiple selections, enhancing user control in forms and interfaces"} start={ <Link to="/radioCheck" className='component-link'>Start</Link>} />
                <QuestionTile qTitle={"Drag and Drop"} qDescription={"Drag and drop is a user interface action where an object is selected, moved, and released to interact with an element at a different location"} start={ <Link to="/dragdrop" className='component-link'>Start</Link>} />
                <QuestionTile qTitle={"Hover"} qDescription={"Hover functionality is a user interface feature that triggers actions or displays information when a cursor or pointer hovers over an element without clicking"} start={ <Link to="/hover" className='component-link'>Start</Link>} />
            </div>
            <div className='row easy-bottom'>
                <QuestionTile qTitle={"File Upload"} qDescription={"File upload is the process of sending and storing digital files, such as documents or images, from a local device to a remote server or platform for access and sharing."} start={ <Link to="/fileUpload" className='component-link'>Start</Link>} />
                <QuestionTile qTitle={"Navigate"} qDescription={"Navigation refers to redirecting the user to a new webpage specified by the link/element that is clicked, facilitating seamless online exploration"} start={ <Link to="/navigate" className='component-link'>Start</Link>} />
                <QuestionTile qTitle={"Progress Bar"} qDescription={"Progress bar is a visual indicator that displays the status or completion level of a task, offering users insight into ongoing activities and estimated completion"} start={ <Link to="/progressBar" className='component-link'>Start</Link>} />
            </div>
        </div>
        <FooterWhite />
        </>
    );
}