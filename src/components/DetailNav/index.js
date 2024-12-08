import React from 'react';
import {useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DetailNav = (sections) => {
    sections = sections.sections;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const renderNavItems = (items) => {
        var result = [];
        for (var i in items) {
            var title = items[i].title;
            result.push(
                <li className="nav-item" key={'ni-'+i}>
                    <a className="nav-link" href={"#"+title.toLowerCase()}>{title}</a>
                </li>
            );
        }
        return result;
    }
    return (
        <Container>
            <Row>
                <Col>
                </Col>
                <Col className='col-10'>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#">Menu</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link active aria-current="page" href="#" onClick={goBack}>Go Back</Nav.Link>
                                {renderNavItems(sections)}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailNav;