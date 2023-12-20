import '../../css/difficulty.css';

const Difficulty = (props) => {
    return (
        <div className='container'>
        <div className="container difficulty">
            <h3>
                {props.level}
            </h3>
            <p className='difficulty-p'>
                {props.desc}
            </p>
        </div>
        </div>
    );
} 

export default Difficulty;