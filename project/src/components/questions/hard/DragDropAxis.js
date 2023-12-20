import '../../../css/dragDropAxis.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';

export default function DragDropAxis() {
    const drag = () => {
        document.getElementById('drag-content').innerHTML = 'Dragging along X-axis';
    }

    const dragY = () => {
        var element = document.getElementById("drag-content");
        element.innerHTML = "Dragging along Y-axis";
    }

  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Drag and Drop 2"} question={ <ul className='question-ul'>
            <li>Drag the 'Drag along X-axis' element</li>
            <li>Get the text displayed</li>
            <li>Verify that the y-coordiante does not change</li>
            <li>Drag the 'Drag along Y-axis' element</li>
            <li>Verify that the X-coordiante does not change</li>
        </ul> } />

        <div className='container drag-drop-axis'> 
            <p id='drag-content'>Loading...</p>

            <Draggable axis='x' bounds='.drag-drop-axis' onDrag={drag}>
                <div className='dragx'>
                    <div>Drag along X-axis</div>
                </div>
            </Draggable>

            <Draggable axis='y' bounds='.drag-drop-axis' onDrag={dragY}>
                <div className='dragx' id='y-axis'>
                    <div>Drag along Y-axis</div>
                </div>
            </Draggable>
        </div>
    </div>

    <SubmitAnswer nextLink={ <Link to='/webTable' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
