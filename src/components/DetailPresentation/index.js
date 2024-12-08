import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {getResourcePath} from '../../utils/utilities';

const DetailPresentation = (props) => {
    var config = props.config;
    var page = props.page;
    const prop_value = 'url("' + getResourcePath(config, page.presentationImagePath) + '")';
    const b_image={backgroundImage: prop_value};
    return (
        <Container className='no-padding' fluid>
            <Row id='project-presentation'  style={b_image}>
                <Col className='align-self-center'>
                    <Row>
                        <Col></Col>
                        <Col className='col-10 text-center'>
                            <h1 className="presentation-title">{page.title}</h1>
                        </Col>
                        <Col></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailPresentation;