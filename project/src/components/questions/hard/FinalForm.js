import '../../../css/finalForm.css';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import Question from '../Question';
import { useState } from 'react';
import { Form, Button, Col, Container, Row, Modal } from 'react-bootstrap';
import tutorial from '../../../images/tutorial.pdf';
import SubmitAnswer from "../SubmitAnswer";
import { Link } from "react-router-dom";

export default function FinalForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    countryCode: '',
    gender: 'male',
    dob: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    languages: [],
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData.languages, value]
          : formData.languages.filter((lang) => lang !== value),
      });
    } else if (type === 'file') {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log(formData);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      countryCode: '',
      gender: '',
      dob: '',
      country: '',
      state: '',
      city: '',
      pincode: '',
      languages: [],
      resume: null,
      textbox: ''
    });
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.contactNumber &&
      formData.countryCode &&
      formData.gender &&
      formData.dob &&
      formData.country &&
      formData.state &&
      formData.city &&
      formData.pincode &&
      formData.resume &&
      formData.textbox
    );
  };

  const countryCodes = [
    '+1 (United States)',
    '+44 (United Kingdom)',
    '+61 (Australia)',
    '+91 (India)',
  ];

  const countries = [
    'United States',
    'United Kingdom',
    'Australia',
    'India',
  ];

  
  const statesData = {
    'United States': [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
    ],
    'United Kingdom': [
      'England',
      'Scotland',
      'Wales',
      'Northern Ireland',
    ],
    'Australia': [
      'New South Wales',
      'Queensland',
      'Victoria',
      'Western Australia',
      'South Australia',
    ],
    'India': [
      'Andhra Pradesh',
      'Arunachal Pradesh',
      'Assam',
      'Bihar',
      'Chhattisgarh',
      'Goa',
      'Gujarat',
      'Haryana',
      'Himachal Pradesh',
      'Karnataka',
      'Maharashtra',
      'Punjab',
      'Rajasthan',
      'Tamil Nadu',
      'Uttar Pradesh',
      'Uttarakhand',
      'West Bengal'
    ],
  };

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Navigation />
    <div className='container'>
      <Question quesTitle={"Form"} question={<ul className='question-ul'>
            <li>Automate the form given below</li>
            <li>Get the title of the modal dialogue</li>
            <li>Copy the paragraph from the modal box and paste in the textbox provided</li>
        </ul>}
      />
    
    <Container className='form-container'>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} className='form-final'>
            <h5 className='form-heading'>Enter your details</h5>
            <Form.Group controlId="firstName">
              <Form.Label className='final-form-label'>First Name</Form.Label>
              <Form.Control
                className='final-form-input'
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label className='final-form-label'>Last Name</Form.Label>
              <Form.Control
                className='final-form-input'
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className='final-form-label'>Email ID</Form.Label>
              <Form.Control
                className='final-form-input'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="contactNumber">
              <Form.Label className='final-form-label'>Contact Number</Form.Label>
              <Row>
                <Col sm={3}>
                  <Form.Control
                    as="select"
                    name="countryCode"
                    className='final-form-input'
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Country Code</option>
                    {countryCodes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col sm={9}>
                  <Form.Control
                    className='final-form-input'
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label className='final-form-label'>Gender: </Form.Label>
              <Form.Check
                className='final-form-input'
                type="radio"
                inline
                label="Male"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
                required
              />
              <Form.Check
                className='final-form-input'
                type="radio"
                inline
                label="Female"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
                required
              />
              <Form.Check
                className='final-form-input'
                type="radio"
                inline
                label="Other"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="dob">
              <Form.Label className='final-form-label'>Date of Birth</Form.Label>
              <Form.Control
                className='final-form-input'
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label className='final-form-label'>Country</Form.Label>
              <Form.Control
                className='final-form-input'
                as="select"
                name="country"
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedState('');
                  setFormData({ ...formData, country: e.target.value, state: '', pincode: '' });
                }}
                required
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label className='final-form-label'>State</Form.Label>
              <Form.Control
                className='final-form-input'
                as="select"
                name="state"
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setFormData({ ...formData, state: e.target.value, pincode: '' });
                }}
                required
                disabled={!selectedCountry}
              >
                <option value="">Select State</option>
                {statesData[selectedCountry] &&
                  statesData[selectedCountry].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label className='final-form-label'>City</Form.Label>
              <Form.Control
                className='final-form-input'
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                disabled={!formData.state}
              />
            </Form.Group>

            <Form.Group controlId="pincode">
              <Form.Label className='final-form-label'>Pincode</Form.Label>
              <Form.Control
                className='final-form-input'
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                disabled={!formData.city}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className='final-form-label'>Languages You Know</Form.Label>
              <Form.Check
                className='final-form-input'
                type="checkbox"
                label="Java"
                name="languages"
                value="java"
                checked={formData.languages.includes('java')}
                onChange={handleInputChange}
              />
              <Form.Check
                className='final-form-input'
                type="checkbox"
                label="C++"
                name="languages"
                value="c++"
                checked={formData.languages.includes('c++')}
                onChange={handleInputChange}
              />
              <Form.Check
                className='final-form-input'
                type="checkbox"
                label="Python"
                name="languages"
                value="python"
                checked={formData.languages.includes('python')}
                onChange={handleInputChange}
              />
              <Form.Check
                className='final-form-input'
                type="checkbox"
                label="C#"
                name="languages"
                value="c#"
                checked={formData.languages.includes('c#')}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="resume">
              <Form.Label className='final-form-label'>Upload Your Resume (PDF)</Form.Label>
              <Form.Control
                className='final-form-input'
                type="file"
                accept=".pdf"
                name="resume"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="downloadResume">
              <Form.Label className='final-form-label'>Download File</Form.Label>
              <br />
              <Button id='form-download' href={tutorial} download>Download File</Button>
            </Form.Group>

            <div>
              <Form.Label className='final-form-label'>Modal Dialogue</Form.Label>
              <br />
              <Button variant="success" id='form-download' onClick={handleShow}>
                Show Modal
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Hello there!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>A modal dialogue is a pop-up window in a graphical user interface 
                    that demands user attention. It temporarily halts the main program's execution, 
                    allowing users to interact with and provide input for a specific task or choice,
                    often enhancing user experience and focus.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
            </Modal>
            </div>
            <Form.Group>
              <Form.Control 
                name='textbox' 
                type='textarea'
                rows='5' cols='50' 
                className='form-textbox' 
                placeholder='Paste content of modal dialogue box here'
                onChange={handleInputChange}
                value={formData.textbox} />
            </Form.Group>  
            <Button variant="success" type="submit" className='form-btn'>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleReset} id='reset-form' className='form-btn'>
              Reset 
            </Button>
          </Form>
        </Col>
      </Row>
      <br />
    </Container>
    </div>
    <SubmitAnswer nextLink={ <Link to='/congrats' className='next-link'>Next Question</Link> } />
    <Footer />
    </>
  );
}
