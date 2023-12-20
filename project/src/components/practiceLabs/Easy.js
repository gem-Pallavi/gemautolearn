import '../../css/difficulty.css';
import QuestionTile from '../questions/QuestionTile';
import { ReactSVG } from 'react-svg';
import Arrow from '../../images/Arrow.svg';
import { Link } from 'react-router-dom';

export default function Easy() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div className='container'>
            <div className='row questions-easy'>
                <QuestionTile qTitle={"Alerts"} qDescription={"Alerts are web pop-up notifications used for user interaction and information display or prompt user actions in web applications, enhancing user experience"} start={ <Link to="/alerts" className='component-link'>Start</Link>} />
                <QuestionTile qTitle={"Buttons"} qDescription={"Buttons are interactive elements on websites. Click is commonly used to perform actions such as submitting forms, activating buttons, while double click is two rapid clicks"} start={ <Link to="/buttons" className='component-link'>Start</Link>} />
                <QuestionTile qTitle={"Toggle Theme"} qDescription={"Background change on click is an interactive web feature where a new color is displayed when a user clicks, enhancing user experience and visual engagement"} start={ <Link to="/theme" className='component-link'>Start</Link>} />
            </div>
            <div className='row easy-bottom'>
                <QuestionTile qTitle={"Dropdown"} qDescription={"A dropdown is a user interface element that presents a list of options when clicked or hovered over, allowing users to select from available choices efficiently"} start={ <Link to="/dropdown" className='component-link'>Start</Link>} />
                <QuestionTile qTitle={"Longpress"} qDescription={"Longpress to select is an input method where a user holds down on an item or element for an extended duration to activate a contextual menu or perform an action"} start={ <Link to="/longpress" className='component-link'>Start</Link>} />
                <QuestionTile qTitle={"Popup"} qDescription={"A popup is a small graphical user interface element that appears temporarily on top of a webpage or application to display additional information or options"} start={ <Link to="/popup" className='component-link'>Start</Link>} />
            </div>
            <div className='row easy-button'>
                <button className='browse' onClick={scrollToTop}>
                    <Link to="/easy-main" className='browse-link'>Browse Everything
                    <ReactSVG src={Arrow} className='browse-arrow' />
                    </Link>
                </button>
            </div>
        </div>
    );
}