import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export default function ToastMessage() {
    const toastMessage = () => {
        toast("This is a toast message");
    }

  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Toast Message"} question={ <ul className='question-ul'>
                <li>Click on the button 'Toast Message'</li>
                <li>Locate the toast message</li>
                <li>Print the text displayed on the toast message</li>
            </ul> } />
        <div className='container toast-message'>
            <button id='longpress-btn' onClick={toastMessage} >Toast Message</button>
            <ToastContainer autoClose={3000} pauseOnHover={false} theme="light" />
        </div>
    </div>
    <SubmitAnswer nextLink={ <Link to='/horizontalScroll' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
