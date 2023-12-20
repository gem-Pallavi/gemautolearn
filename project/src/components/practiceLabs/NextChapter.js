import '../../css/nextChapter.css';
import Confetti from 'react-confetti';

const NextChapter = (props) => {
    return (
        <div className="container next-chapter">
            <h2>Next Chapter:</h2>
            <div className='container chapter-content'>
                <Confetti className='confetti' numberOfPieces={60} />
                <h1 className='chapter-heading'>{props.chapter}</h1>
                <p className='chapter-name'>Good job on completing {props.chapterName}!</p>
                <p className='chapter-description'>{props.chapterDesc}</p>
                <button className='chapter-button' onClick={props.link}>Let's Begin!</button>
            </div>
        </div>
    );
}

export default NextChapter;