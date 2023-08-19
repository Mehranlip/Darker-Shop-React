import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';


import { Row, Col, Form, Button } from 'react-bootstrap';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async () => {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            login(data.token)
            toast.success("ورود با موفقیت انجام شد")
            navigate("/")


        } else {
            toast.error("ورود ناموفق")
        }
    };

    return (
        <Row className='d-flex align-items-center justify-content-center vh-100'>
            <Col sm={12} md={6} className='' >
                <Form>
                    <Form.Label className='display-6'>ورود کاربر </Form.Label>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>آدرس ایمیل </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="test@contact.ir"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>رمز عبور</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="*********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button className='mt-3' variant="btn btn-outline-secondary" onClick={handleLogin}>
                        ورود
                    </Button>
                </Form>
            </Col>
        </Row>

    );
}

export default LoginForm;
