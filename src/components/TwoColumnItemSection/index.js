import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TwoColumnItemSection = (section) => {
    const renderItems = (items) => {
        var result = []
        for (var i=0; i < items.length; i++){
            result.push(
                <Row className='section-content' key={'tcis-'+i}>
                    <Col className='col-9'>
                        <p><b>{items[i].title}</b></p>
                        <p>{items[i].description}</p>
                    </Col>
                    <Col className='col-3 date-range'>
                        <p dangerouslySetInnerHTML={{__html: items[i].side_content}}></p>
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

export default TwoColumnItemSection;