import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



import { Row, Col, Form, Button } from 'react-bootstrap';


function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegistration = async () => {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
            toast.success("حساب کاربری با موفقیت ساخته شد")
            navigate('/login')
        } else {
            toast.error("ساخت حساب ناموفق")
        }
    };

    return (
        <Row className='d-flex align-items-center justify-content-center vh-100'>
            <Col sm={12} md={6} className='' >
                <Form>
                    <Form.Label className='display-6'>ثبت نام کاربر </Form.Label>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> نام کاربری </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Mehranlip"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

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

                    <Button className='mt-3' variant="btn btn-outline-secondary" onClick={handleRegistration}>
                        ورود
                    </Button>
                </Form>
            </Col>
        </Row>

    );
}

export default RegistrationForm;
