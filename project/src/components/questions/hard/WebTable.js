import React, { useState } from 'react';
import '../../../css/webTable.css';
import Navigation from '../../Navigation';
import Question from '../Question';
import Footer from '../../Footer';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Form, Button, FormGroup } from 'react-bootstrap';

export default function WebTable() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [tableData, setTableData] = useState([
        { firstName: 'Taylor', lastName: 'Swift', age: '33' },
        { firstName: 'Ed', lastName: 'Sheeran', age: '32' },
        { firstName: 'Lana', lastName: 'Del Ray', age: '38' },
        { firstName: 'Olivia', lastName: 'Rodrigo', age: '20' },
    ]);

    const addData = () => {
        setFirstName('');
        setLastName('');
        setAge('');
        setShowForm(true);
    }

    const handleSubmit = () => {
        const newData = { firstName, lastName, age };
        setTableData([...tableData, newData]);
        setShowForm(false);
    }

    const handleDelete = (index) => {
        const updatedData = tableData.filter((_, i) => i !== index);
        setTableData(updatedData);
    }

    return (
        <>
            <Navigation />
            <div className='container'>
                <Question quesTitle={"Web Table"} question={<ul className='question-ul'>
                    <li>Print the last name of the third person from the table</li>
                    <li>Add a new row to the table</li>
                    <li>Count the number of rows in the table</li>
                    <li>Delete the fourth row from the table</li>
                    <li>Count the number of people with age greater than 30</li>
                </ul> } />

                <div className='row btns'>
                    <Button variant='success' className='table-btn' onClick={addData}>Add</Button>
                </div>

                {showForm && (
                    <Form id='webtable-form'>
                        <FormGroup>
                            <Form.Label className='webtable-form-label'>First Name</Form.Label>
                            <Form.Control
                                className='webtable-form-input'
                                type="text"
                                name="first-name"
                                placeholder="Enter First Name"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <Form.Label className='webtable-form-label'>Last Name</Form.Label>
                            <Form.Control
                                className='webtable-form-input'
                                type="text"
                                name="last-name"
                                placeholder="Enter Last Name"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <Form.Label className='webtable-form-label'>Age</Form.Label>
                            <Form.Control
                                className='webtable-form-input'
                                type="number"
                                name="age"
                                placeholder="Enter Age"
                                required
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                            <Button variant='success' onClick={handleSubmit} className='webtable-form-btn' disabled={!firstName || !lastName || !age}>ADD</Button>
                        </FormGroup>
                    </Form>
                )}

                <Table className='web-table'>
                    <thead>
                        <tr>
                            <th className='webtable-heading'>First Name</th>
                            <th className='webtable-heading'>Last Name</th>
                            <th className='webtable-heading'>Age</th>
                            <th className='webtable-heading'>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.age}</td>
                                <td>
                                    <Button variant='danger' size='sm' onClick={() => handleDelete(index)} className='webtable-del-btn'>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <SubmitAnswer nextLink={<Link to='/fileDownload' className='next-link'>Next Question</Link>} />
            <Footer />
        </>
    );
}
