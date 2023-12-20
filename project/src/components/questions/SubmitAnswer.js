import '../../css/submitAnswer.css';
import React, { useState, useRef, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import Arrow from '../../images/Arrow.svg';

function SubmitAnswer(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setShowAnimation(true);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='container submit-answer'>
      <div className='container file-upload'>
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <button onClick={handleButtonClick} className='upload-btn'>
          Submit Your Solution
        </button>
        {!selectedFile && (
          <p className='file-upload-message'>Please upload a file</p>
        )}
        {selectedFile && (
          <div>
            <p>{selectedFile.name}</p>
          </div>
        )}
        {showSuccess && <div className='success'>+1 <br /> Keep Going!</div>}
      </div>

      <div className='row next-question'>
        <p className='next-text' onClick={scrollToTop}>
          {props.nextLink}
        </p>
        <ReactSVG src={Arrow} className='next-arrow' />
      </div>
    </div>
  );
}

export default SubmitAnswer;


