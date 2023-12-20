import '../../../css/autocomplete.css';
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function AutocompleteDropdown() {
    const options = [
      { value: 'hulk', label: 'Hulk' },
      { value: 'thor', label: 'Thor' },
      { value: 'ironMan', label: 'Iron Man' },
      { value: 'cap', label: 'Captain America' },
      { value: 'capm', label: 'Captain Marvel' }
    ];

    const animatedComponents = makeAnimated();

  return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Autocomplete"} question={ <ul className='question-ul'>
                <li>Type 'Iron' and select the value 'Iron man' from dropdown</li>
                <li>Type 'Cap' and select the value 'Captain America' from dropdown</li>
                <li>Remove 'Iron Man' from the selected values</li>
            </ul> } />
       
    </div>
    <div className='container autocomplete'>
      <Select className='select-autocomplete'
        closeMenuOnSelect={true}
        components={animatedComponents}
        isMulti
        options={options} ></Select>
    </div>
    <SubmitAnswer nextLink={ <Link to='/svg' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
