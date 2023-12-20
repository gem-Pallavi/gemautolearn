import '../../css/goal.css';

export default function GoalCard(props) {
  return (
    <>
    <div className="select-goal">
      <div className='goal-img'>
        <img src={props.goalImg} alt='challenge' />
      </div>
      <div className='container goal-content'>
        <h5>{props.goalHeading}</h5>
        <p className='goal-p'>{props.goalContent}</p>
      </div>
    </div>
    </>
  );
}
