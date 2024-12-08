import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ParagraphSection = (section) => {
    return (
        <Col>
            <Row>
                <Col>
                    <h2>{section.title}</h2>
                    <hr className="border-2 border-dark"/>
                </Col>
            </Row>
            <Row className='section-content'>
                <Col dangerouslySetInnerHTML={{__html: section.paragraph}}>
                </Col>
            </Row>
        </Col>
    );
};

export default ParagraphSection;