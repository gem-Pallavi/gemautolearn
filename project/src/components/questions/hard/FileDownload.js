import '../../../css/fileDownload.css';
import Footer from "../../Footer";
import Navigation from "../../Navigation";
import Question from "../Question";
import SubmitAnswer from "../SubmitAnswer";
import { Link } from "react-router-dom";
import tutorial from '../../../images/tutorial.pdf';
import { Button } from "react-bootstrap";

export default function FileDownload() {
  return (
    <>
    <Navigation />
    <div className="container">
        <Question quesTitle={"File Download"} question={<ul className='question-ul'>
                    <li>Click the 'Download File' button</li>
                    <li>Download the file in 'Documents' folder</li>
                </ul> } />
        <Button variant='success' id="file-download-btn" href={tutorial} download>Download File</Button>
    </div>
    <SubmitAnswer nextLink={<Link to='/dateTime' className='next-link'>Next Question</Link>} />
    <Footer />
    </>
  );
}
