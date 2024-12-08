import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainNav = (sections) => {
    sections = sections.sections;
    const renderNavItems = (items) => {
        var result = [];
        for (var i in items) {
            var title = items[i].title;
            result.push(
                <Nav.Link href={"#"+title.toLowerCase()} key={'ni-'+i}>{title}</Nav.Link>
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
                                <Nav.Link active aria-current="page" href="#">Home</Nav.Link>
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

export default MainNav;