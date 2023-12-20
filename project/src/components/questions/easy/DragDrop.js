import '../../../css/dragDrop.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import Question from '../Question';
import { Draggable, Droppable } from 'react-drag-and-drop'

export default function DragDrop() {
  const handleDrop = () => {
    document.getElementById('drop-txt').innerHTML = 'Dropped!';
  };

  return (
    <>
      <Navigation />
      <div className='container dragdrop'>
        <Question
          quesTitle='Drag and Drop'
          question={
            <ul className='question-ul'>
              <li>Locate the source element using appropriate locators</li>
              <li>Locate the target element using locators </li>
              <li>Perform the drag and drop action by simulating the mouse drag from the source element to the target element</li>
              <li>Verify that the operation was performed</li>
            </ul>
          }
        />
        <div>
          <Draggable className='source-ele'>
            <p>Drag me!</p>
          </Draggable>
        </div>  
        <div className='target-ele'>
          <Droppable onDrop={handleDrop}>
            <p>Drop here!</p>
          </Droppable>
        </div>
        <p id='drop-txt'></p>
      </div>
      <SubmitAnswer
        nextLink={
          <Link to='/hover' className='next-link'>
            Next Question
          </Link>
        }
      />
      <Footer />
    </>
  );
}


