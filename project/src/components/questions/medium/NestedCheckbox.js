import '../../../css/nestedCheckbox.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CheckboxWithArrow({ label, checked, onChange, onClickArrow, isExpanded }) {
    return (
        <div>
            <span onClick={onClickArrow} className='checkbox-arrow'>{isExpanded ? '👇 ' : '👉 '}</span>
            <input type="checkbox" checked={checked} onChange={onChange} />
            {label}
        </div>
    );
}

export default function NestedCheckbox() {
    const [isChecked, setIsChecked] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isSubExpanded1, setIsSubExpanded1] = useState(false);
    const [isChecked2_1, setIsChecked2_1] = useState(false);
    const [isChecked2_2, setIsChecked2_2] = useState(false);
    const [isChecked2_3, setIsChecked2_3] = useState(false);
    const [isSubExpanded2, setIsSubExpanded2] = useState(false);
    const [isChecked2_2_1, setIsChecked2_2_1] = useState(false);
    const [isChecked2_2_2, setIsChecked2_2_2] = useState(false);
    const [isChecked2_2_3, setIsChecked2_2_3] = useState(false);
    
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    
    const toggleSubExpand1 = () => {
        setIsSubExpanded1(!isSubExpanded1);
    };
    
    const toggleSubExpand2 = () => {
        setIsSubExpanded2(!isSubExpanded2);
    };

    return (
        <>
            <Navigation />
            <div className='container radio-check'>
                <Question quesTitle={"Nested Checkbox"} question={<ul className='question-ul'>
                    <li>Locate the main checkbox and click on the expand arrow</li>
                    <li>Select the first checkbox and click on the expand arrow</li>
                    <li>Select the third checkbox in the nested checkboxes</li>
                    <li>Select Checkbox 2.2 and click the expand arrow</li>
                    <li>Select Checkbox 2.2.1</li>
                </ul>} />
                <div className='container checkboxes'>
                <CheckboxWithArrow
                    label="Checkbox 1"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    onClickArrow={toggleExpand}
                    isExpanded={isExpanded}
                />
                {isExpanded && (
                    <div style={{ marginLeft: '20px' }}>
                        <CheckboxWithArrow
                            label="Checkbox 2.1"
                            checked={isChecked2}
                            onChange={() => setIsChecked2(!isChecked2)}
                            onClickArrow={toggleSubExpand1}
                            isExpanded={isSubExpanded1}
                        />
                        {isSubExpanded1 && (
                            <div style={{ marginLeft: '20px' }}>
                                <CheckboxWithArrow
                                    label="Checkbox 2.1.1"
                                    checked={isChecked2_1}
                                    onChange={() => setIsChecked2_1(!isChecked2_1)}
                                    isExpanded={false}
                                />
                                <CheckboxWithArrow
                                    label="Checkbox 2.1.2"
                                    checked={isChecked2_2}
                                    onChange={() => setIsChecked2_2(!isChecked2_2)}
                                    isExpanded={false}
                                />
                                <CheckboxWithArrow
                                    label="Checkbox 2.1.3"
                                    checked={isChecked2_3}
                                    onChange={() => setIsChecked2_3(!isChecked2_3)}
                                    isExpanded={false}
                                />
                            </div>
                        )}
                        <CheckboxWithArrow
                            label="Checkbox 2.2"
                            checked={isChecked3}
                            onChange={() => setIsChecked3(!isChecked3)}
                            onClickArrow={toggleSubExpand2}
                            isExpanded={isSubExpanded2}
                        />
                        {isSubExpanded2 && (
                            <div style={{ marginLeft: '20px' }}>
                                <CheckboxWithArrow
                                    label="Checkbox 2.2.1"
                                    checked={isChecked2_2_1}
                                    onChange={() => setIsChecked2_2_1(!isChecked2_2_1)}
                                    isExpanded={false}
                                />
                                <CheckboxWithArrow
                                    label="Checkbox 2.2.2"
                                    checked={isChecked2_2_2}
                                    onChange={() => setIsChecked2_2_2(!isChecked2_2_2)}
                                    isExpanded={false}
                                />
                                <CheckboxWithArrow
                                    label="Checkbox 2.2.3"
                                    checked={isChecked2_2_3}
                                    onChange={() => setIsChecked2_2_3(!isChecked2_2_3)}
                                    isExpanded={false}
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
            </div>
            <SubmitAnswer nextLink={<Link to='/dynamicClass' className='next-link'>Next Question</Link>} />
            <Footer />
        </>
    );
}

