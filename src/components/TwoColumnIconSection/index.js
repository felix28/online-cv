import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TwoColumnIconSection = (section) => {
    const renderItems = (items) => {
        var result = []
        for (var i=0; i < items.length; i++){
            var iconClass = '';
            if (items[i].type === 'pdf') {
                iconClass = 'bi-file-earmark-pdf text-danger';
            } else if (items[i].type === 'repository') {
                iconClass = 'bi-file-earmark-code';
            } else if (items[i].type === 'link') {
                iconClass = 'bi-link';
            }

            result.push(
                <Row className='section-content' key={'tcls-'+i}>
                    <Col className='col-2 col-md-1'>
                        <i className={'icon icon-resource '+iconClass}></i>
                    </Col>
                    <Col className='col-10 col-md-11 align-self-center'>
                        <a href={items[i].url} target="_blank" 
                            rel="noopener noreferrer">{items[i].title}</a>
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

export default TwoColumnIconSection;