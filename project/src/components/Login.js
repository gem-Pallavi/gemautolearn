import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/login.css';
import loginImg from '../images/login.png';
import loginLine from '../images/loginLine.png';
import google from '../images/google.png';
import outlook from '../images/outlook.png';
import mis from '../images/mis.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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

        if (!formData.email || !formData.password) {
            alert('Please enter the required details');
            return;
        }
        
        navigate('/practice');
    };

    return (
        <div className="row login"> 
            <div className="container login-area">
                <h3 className='row login-heading'>
                    Welcome to GemAutoLearn
                </h3>
                <Form id='login-form' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='label' id='label-email'>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter email"
                            className='form-input'
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='label' id='label-password'>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                            className='form-input'
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" id='submit-login'> 
                        Login
                    </Button>
                    <div className='row after-btn'>
                            <img src={ loginLine } alt='' className='login-line' id='login-line-1' />
                            <p id='between-lines'>Or sign up with</p>
                            <img src={ loginLine } alt='' className='login-line' id='login-line-2' />
                        </div>
                        <div className='row social-media'>
                            <button className='media-icons'>
                                <img src={ google } alt='' className='icon-img' />
                            </button>
                            <button className='media-icons'>
                                <img src={ outlook } alt='' className='icon-img' />
                            </button>
                            <button className='media-icons'>
                                <img src={ mis } alt='' className='icon-img' id='mis-icon'/>
                            </button>
                        </div>
                    </Form>
            </div>
            <div className='container login-img'>
                <img src={loginImg} alt='' id='img-login'/>
            </div>
        </div>
    );
}
