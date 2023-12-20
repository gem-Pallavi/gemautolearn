import '../../css/questionTile.css';

const QuestionTile = (props) => {
    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <div className="question-tile">
            <h4 className="question-title">{props.qTitle}</h4>
            <p className="question-description">{props.qDescription}</p>
            <button className="questionButton" onClick={scrollToTop}>{props.start}</button>
        </div>
    );
}

export default QuestionTile;