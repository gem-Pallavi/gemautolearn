import '../css/signUp.css';
import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import signupImg from '../images/signupImg.png';

export default function SignUp() {
    useEffect(() => {
        window.scrollTo(0,0);
      }, []);

    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPass: '',
        textbox: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordsMatch) {
            navigate('/practice');
        } else {
            window.alert('Passwords do not match!');
        }
    };

    const handlePasswordBlur = () => {
        if (formData.confirmPass !== formData.password) {
            setPasswordsMatch(false);
        } else {
            setPasswordsMatch(true);
        }
    };

  return (
    <div className='row login'>
        <div className='col-md-3 signup-img'>
                <img src={signupImg} alt='signup' id='img-signup'/>
        </div>
        <div className='col-md-9 signup-col'>
            <div className='container signup-area'>
                <h3 className='row signup-heading'>
                    Welcome to GemAutoLearn
                </h3>
                <Form id='signup-form' onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label className='label'>
                            First Name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter First Name"
                            className='form-input-name'
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='side-label'>
                            Last Name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter Last Name"
                            className='form-input-name'
                            id='last-name'
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='label'>
                            Username
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleInputChange}
                            placeholder="Enter Username"
                            className='form-input-name'
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='side-label' id='label-email'>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter email"
                            className='form-input-name'
                            id='last-name'
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className='label'>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                            className='form-input-name'
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            title="Must contain at least one number, one 
                            uppercase letter, one lowercase letter, one special character,
                            and minimum 8 characters"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className='label-confirmPass'>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="confirmPass"
                            value={formData.confirmPass}
                            onChange={handleInputChange}
                            onBlur={handlePasswordBlur}
                            placeholder="Confirm Password"
                            className='form-input-name'
                            id='last-name'
                            required
                        />
                    </Form.Group>
                    {!passwordsMatch && (
                        <div className="alert password-alert" role="alert">
                            Passwords do not match!
                        </div>
                    )}
                    <Form.Group>
                        <Form.Label className='label'>About You</Form.Label>
                        <textarea 
                            id="exampleFormControlTextarea1"
                            name='textbox'
                            className='form-control form-input-textbox'
                            placeholder='Tell us a bit about yourself...' 
                            onChange={handleInputChange}
                            value={formData.textbox}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" id='submit-signup'> 
                        Create Account
                    </Button>
                </Form>
            </div>
        </div>
    </div>
  );
}
