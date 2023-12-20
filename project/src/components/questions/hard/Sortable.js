import '../../../css/sortable.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import GridItem from './GridItem';

export default function Sortable() {
    const customData = [
        { id: 4, name: 'Item 4' },
        { id: 1, name: 'Item 1' },
        { id: 6, name: 'Item 6' },
        { id: 5, name: 'Item 5' },
        { id: 3, name: 'Item 3' },
        { id: 2, name: 'Item 2' },     
      ];

    const [users, setUsers] = useState(customData);

      const onDragDropEnds = (oldIndex, newIndex) => {
        console.log(oldIndex, newIndex);
      };

  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Sorting"} question={<ul className='question-ul'>
                <li>Sort the items in ascending order</li>
                <li>Sort the items in descending order</li>
            </ul>} 
        />
        <div className="border rounded-3 p-3 shadow sort-grid">
            <ReactSortable
            list={users}
            setList={(newlist) => setUsers(newlist)}
            ghostClass="dropArea"
            handle=".dragHandle"
            filter=".ignoreDrag"
            preventOnFilter={true}
            className="grid-container"
            onEnd={({ oldIndex, newIndex }) => onDragDropEnds(oldIndex, newIndex)}
            >
            <>
                {users.map((user) => (
                <GridItem key={user.id} user={user} />
                ))}
            </>
            </ReactSortable>
        </div>
    </div>
    <SubmitAnswer nextLink={ <Link to='/carousel' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
