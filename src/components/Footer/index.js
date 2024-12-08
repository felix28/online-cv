import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer=()=> {
    const year = new Date().getFullYear();
    return (
        <Container>
            <Row>
                <Col md={1}>
                </Col>
                <Col>
                    <Row id="copyright" className="section">
                        <Col className='text-center'>
                            <p>© {year} alfredonuhe</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={1}>
                </Col>
            </Row>
        </Container>
    );
  };

export default Footer;