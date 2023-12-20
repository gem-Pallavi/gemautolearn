import '../../css/question.css';

const Question = (props) => {
    return (
        <div className="conatiner question">
            <div className='row'>
                <h1 id="question-heading">{props.quesTitle}</h1>
            </div>
            <div className='row paragraph'>
                <p id='question'>Write Selenium code to:{props.question}</p>
            </div>
        </div>
    );
}

export default Question;