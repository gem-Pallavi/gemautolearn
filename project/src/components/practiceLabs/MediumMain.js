import Difficulty from "./Difficulty";
import Navigation from "../Navigation";
import '../../css/difficulty.css';
import QuestionTile from '../questions/QuestionTile';
import { Link } from "react-router-dom";
import bgVid from '../../images/bgVid.mp4';
import FooterWhite from "../FooterWhite";

export default function MediumMain() {
    return (
        <>
        <Navigation />
        <video autoPlay loop muted playsInline id='background-practice' className="bg1">
            <source src={bgVid} type="video/mp4" />
        </video>
        <div className="container">
            <Difficulty level={"Progressing Forward"} desc={"A thrilling phase where your skills evolve, challenges intensify, and your journey towards mastery and expertise takes flight, guiding you to new heights of personal and professional achievement!"}/>
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
            <div className='row easy-bottom'>
                <QuestionTile qTitle={"Autocomplete"} qDescription={"Autocomplete dropdown is an interactive web element that dynamically suggests and displays selectable options as users type, streamlining data entry and selection processes"} start={ <Link to='/autocomplete' className='component-link' >Start</Link> } />
                <QuestionTile qTitle={"Svg Handling"} qDescription={"SVG (Scalable Vector Graphics) is a file format for 2D vector images. It's resolution-independent graphics are suitable for web and print, with support for interactivity and animation"} start={ <Link to='/svg' className='component-link' >Start</Link> } />
                <QuestionTile qTitle={"Toast Message"} qDescription={"Toast messages are brief, non-intrusive pop-up notifications that provide users with important information or alerts in a small, transient window, typically used in software applications and websites"} start={ <Link to='/toastMessage' className='component-link' >Start</Link> } />
            </div>
            <div className='row easy-bottom'>
                <QuestionTile qTitle={"Horizontal Scroll"} qDescription={"Horizontal scroll elements are parts of a web page or application that extend beyond the visible screen width, allowing users to scroll left or right to access hidden content or features"}  start={ <Link to='/horizontalScroll' className='component-link'>Start</Link> } />
                <QuestionTile qTitle={"Slider"} qDescription={"A click-and-drag slider is a user interface element that requires users to click, hold, and move their cursor to adjust a value or position along a track, often used for setting preferences or ranges"} start={ <Link to='/sliderDrag' className='component-link'>Start</Link> } />
                <QuestionTile qTitle={"Broken Links"} qDescription={"Broken links are hyperlinks on a website that no longer function, leading to error pages or dead ends, disrupting user experience and potentially causing SEO issues"} start={ <Link to='/brokenLink' className='component-link'>Start</Link> } />
            </div>
        </div>
        <FooterWhite />
        </>
    );
}