import '../../../css/iframe.css';
import Footer from "../../Footer";
import Navigation from "../../Navigation";
import Question from "../Question";
import SubmitAnswer from "../SubmitAnswer";
import { Link } from "react-router-dom";

export default function NestedIframe() {
  return (
    <>
    <Navigation />
    <div className="container">
        <Question quesTitle={"Nested iFrames"} question={<ul className='question-ul'>
            <li>Navigate to the Inner iframe</li>
            <li>Enter your name in the input box</li>
        </ul>} />
        <div className="container nested-iframes">
            <p>Outer IFrame</p>
            <iframe
                title="Outer IFrame"
                srcDoc={`
                <html>
                    <head>
                    <style>
                        p {
                        color: black;
                        }
                    </style>
                    </head>
                    <body>
                    <p>Inner IFrame</p>
                    <iframe
                        title="Nested Inner IFrame"
                        srcDoc="<html><head></head><body><input type='text' placeholder='Enter your name' /></body></html>"
                    ></iframe>
                    </body>
                </html>
                `}
                width="400"
                height="300"
                frameBorder="1"
            ></iframe>
        </div>
    </div>
    <SubmitAnswer nextLink={<Link to='/webElement' className='next-link'>Next Question</Link>} />
    <Footer />
    </>
  );
}