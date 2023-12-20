import '../css/benefit-tile.css';
import { useState } from 'react';

const RectangleCard = (props) => {
    const [ isFlipped, setIsFlipped ] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };
    
      const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} >
            <div className="card rect-card justify-content-center align-items-center">
                <div className='front-card'>
                    <div className="icon-rect">
                        { props.iconImage }
                    </div>
                    <h4 className="card-title">{ props.title }</h4>
                </div>
                <div className='back-card'>
                    { props.backContent }
                </div>
            </div>
        </div>
    );
}
  
export default RectangleCard;