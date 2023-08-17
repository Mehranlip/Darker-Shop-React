import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="card-bg text-color py-5 mt-5 rounded">
            <Container>
                <Row>
                    <Col md={4}>
                        <h4>درباره ما</h4>
                        <p>ما درباره‌ی یادگیری و انتقال دانش به دست‌یابی به رویاها باور داریم.</p>
                    </Col>
                    <Col md={4}>
                        <h4>تماس با ما</h4>
                        <p>آدرس: تهران، خیابان مثال، کدپستی 12345</p>
                        <p>ایمیل: info@example.com</p>
                    </Col>
                    <Col md={4}>
                        <h4>لینک‌های مفید</h4>
                        <ul>
                            <li><a className="text-color" href="#">صفحه اصلی</a></li>
                            <li><a className="text-color" href="#">درباره ما</a></li>
                            <li><a className="text-color" href="#">خدمات</a></li>
                            <li><a className="text-color" href="#">تماس با ما</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 کلیه حقوق این وب‌سایت محفوظ است.
            </div>
        </footer>
    );
};

export default Footer;
