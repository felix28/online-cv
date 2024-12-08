import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactSection = (section) => {
    const renderItems = (links) => {
        var result = []
        var link = undefined;
        for (var i=0; i < links.length; i++){
            if (links[i].includes("@")){
                link = (
                    <a href={links[i]} key={'contact-link-'+i}
                        target="_blank" rel="noopener noreferrer">
                        <i className="icon bi-envelope"></i>
                    </a>
                )
            } else if (links[i].includes("github.com/")) {
                link = (
                    <a href={links[i]} key={'contact-link-'+i}
                        target="_blank" rel="noopener noreferrer">
                        <i className="icon bi-github"></i>
                    </a>
                )
            } else if (links[i].includes("linkedin.com/")) {
                link = (
                    <a href={links[i]} key={'contact-link-'+i}
                    target="_blank" rel="noopener noreferrer">
                        <i className="icon bi-linkedin"></i>
                    </a>
                )
            }
            result.push(link);
        }
        return result;
    }
    return (
        <Col>
            <Row>
                <Col>
                    <h2>{section.title}</h2>
                    <hr className="border-2 border-dark"/>
                </Col>
            </Row>
            <Row className='md-vertical-padding section-content text-center'>
                <Col>
                    {renderItems(section.links)}
                </Col>
            </Row>
        </Col>
    );
};

export default ContactSection;