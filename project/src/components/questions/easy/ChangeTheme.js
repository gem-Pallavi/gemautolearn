import '../../../css/theme.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ChangeTheme() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

  return (
    <>
    <Navigation />
    <div className={`container toggle ${isDarkMode ? 'dark' : 'light'}`}>
        <Question quesTitle={"Toggle Theme"} question={<ul className='question-ul'>
            <li>Identify and interact with the theme switcher element</li>
            <li>Verify if the theme of the page has been changed</li>
        </ul>} />
            <button id='theme-button' onClick={toggleTheme}>Change Theme</button>
    </div>
    <SubmitAnswer nextLink={ <Link to='/dropdown' className='next-link'>Next Question</Link> } />
    <Footer/>
    </>
  );
}
