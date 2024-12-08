import React from 'react';
import {useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {getResourcePath} from '../../utils/utilities';
import {createScripts, loadScriptsSequential, removeScripts} from '../../utils/script_loader';

const Presentation = (props) => {
    var config = props.config;
    var info = props.info;
    useEffect(() => {
        const scriptUrls = [
          '/static/js/vanta/three.min.js',
          '/static/js/vanta/vanta.waves.min.js',
          '/static/js/vanta_background.js'
        ];
        var scripts = createScripts(config, scriptUrls, 'presentation');
        loadScriptsSequential(scripts, '#app-2');
        return function () {return removeScripts(scripts)};
      }, []);

    const renderLinks = (links) => {
        var result = []
        var link = undefined;
        for (var i=0; i < links.length; i++){
            if (links[i].includes("@")){
                link = (
                    <a href={links[i]} key={'contact-link-'+i}
                        target="_blank" rel="noopener noreferrer">
                        <i className="icon presentation-icon bi-envelope"></i>
                    </a>
                )
            } else if (links[i].includes("github.com/")) {
                link = (
                    <a href={links[i]} key={'contact-link-'+i}
                        target="_blank" rel="noopener noreferrer">
                        <i className="icon presentation-icon bi-github"></i>
                    </a>
                )
            } else if (links[i].includes("linkedin.com/")) {
                link = (
                    <a href={links[i]} key={'contact-link-'+i}
                    target="_blank" rel="noopener noreferrer">
                        <i className="icon presentation-icon bi-linkedin"></i>
                    </a>
                )
            }
            result.push(link);
        }
        return result;
    }

    return (
        <Container id='presentation' fluid>
            <Row>
                <Col>
                    <Row>
                        <Col className='align-self-center'>
                            <Row className='pad-top-5'>
                                <Col className='text-center'>
                                    <img className="rounded-circle border border-2 profile-picture"
                                        src={getResourcePath(config, info.photoPath)} alt="Profile"></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='text-center'>
                                    <h1 className="presentation-text">{info.name}</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='text-center'>
                                    <h3 className="presentation-text">{info.title}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='text-center'>
                                    {renderLinks(info.links)}
                                </Col>
                            </Row>
                            <Row  className='pad-top-5'>
                                <Col className='text-center'>
                                    <button type="button" id="get-started-button"
                                                    className="btn btn-outline-light bounce-color">Get Started</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Presentation;