import '../../../css/fileUpload.css';
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

export default function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={ "File Upload" } question={ <ul className='question-ul'>
              <li>Navigate to the "Upload a File" button</li>
              <li>Upload the file using Selenium WebDriver</li>
              <li>Verify that the file was uploaded</li>
            </ul> } />

            <div className='container fileUpload'>
          <input type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
          />
          <button onClick={handleButtonClick} className='uploadBtn'>Upload a file</button>
          {!selectedFile && (
            <p className='uploadMessage'>Please upload a file</p>
          )}
          {selectedFile && ( <p>{selectedFile.name}</p> )}
        </div>
    </div>
    <SubmitAnswer nextLink={ <Link to='/navigate' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
};
