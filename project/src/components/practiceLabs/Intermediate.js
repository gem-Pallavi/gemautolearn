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
                <QuestionTile qTitle={"Nested Checkbox"} qDescription={"A nested checkbox is a user interface element that's a sub-option within a parent checkbox, enabling multiple layers of selection and organization in a list or form"} start={<Link to='/nestedCheckbox' className='component-link' >Start</Link>} />
                <QuestionTile qTitle={"Dynamic Class"} qDescription={"Dynamic class refers to the property of an element where its class name keeps changing everytime the webpage is refreshed or the element reappears after a certain period of time"} start={<Link to='/dynamicClass' className='component-link' >Start</Link>} />
                <QuestionTile qTitle={"Nested iFrames"} qDescription={"Nested iFrames refers to the embedding of one iframe within another, allowing content from multiple sources to be displayed within a single webpage, enhancing modularity and customization"} start={<Link to='/iframe' className='component-link' >Start</Link>} />
            </div>
            <div className='row easy-bottom'>
                <QuestionTile qTitle={"Web Elements"} qDescription={"Web elements are components of a webpage, like buttons, text fields, images, and links, which users interact with to navigate, input data, or access information on the internet"} start={ <Link to='/webElement' className='component-link' >Start</Link> } />
                <QuestionTile qTitle={"Broken Images"} qDescription={"Broken images are graphics on a webpage that fail to load or display properly, often appearing as placeholders or error icons, detracting from the visual content"} start={ <Link to='/brokenImages' className='component-link' >Start</Link> } />
                <QuestionTile qTitle={"Resize Textbox"} qDescription={"A resize textbox is an input field on a website or application that allows users to manually adjust its dimensions, typically by dragging its edges, for better text entry control"} start={ <Link to='/resizeTextbox' className='component-link' >Start</Link> } />
            </div>
            <div className='row easy-button'>
                <button className='browse'>
                    <Link to="/intermediate-main" className='browse-link' onClick={scrollToTop}>Browse Everything
                    <ReactSVG src={Arrow} className='browse-arrow'/>
                    </Link>
                </button>
                <ReactSVG src={Arrow} className='browse-arrow'/>
            </div>
        </div>
    );
}