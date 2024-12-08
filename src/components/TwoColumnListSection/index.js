import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TwoColumnListSection = (section) => {
    const renderItems = (items) => {
        var result = []
        for (var i=0; i < items.length; i++){
            result.push(
                <Row className='section-content' key={'tcls-'+i}>
                    <Col className='col-6'>
                        <p><b>{items[i].title}</b></p>
                    </Col>
                    <Col className='col-6'>
                        <p>{items[i].value}</p>
                    </Col>
                </Row>
            )
        }
        return result;
    };

    return (
        <Col>
            <Row>
                <Col>
                    <h2>{section.title}</h2>
                    <hr className="border-2 border-dark"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    {renderItems(section.items)}
                </Col>
            </Row>
        </Col>
    );
};

export default TwoColumnListSection;