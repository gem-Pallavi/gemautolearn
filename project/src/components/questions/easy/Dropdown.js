import React, { useState } from 'react';
import '../../../css/dropdown.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import SubmitAnswer from '../SubmitAnswer';
import Question from '../Question';
import { Link } from 'react-router-dom';

export default function Dropdown() {
  const [selectedValue, setSelectedValue] = useState('default');

  const handleDropdownChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <Navigation />
      <div className='container dropdown'>
        <Question
          quesTitle={"Dropdown"}
          question={
            <ul className='question-ul'>
              <li>Identify the dropdown in the webpage</li>
              <li>Select an option from the dropdown menu</li>
            </ul>
          }
        />
        <div className='custom-select'>
          <select id="marvel" onChange={handleDropdownChange} value={selectedValue}>
            <option value="default">Select</option>
            <option value="Iron Man">Iron Man</option>
            <option value="Captain America">Captain America</option>
            <option value="Thor">Thor</option>
          </select>
        </div>
        <p id='selected-value'>Selected Value: {selectedValue}</p>
      </div>
      <SubmitAnswer nextLink={<Link to='/longpress' className='next-link'>Next Question</Link>} />
      <Footer />
    </>
  );
};
