import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactSection from '../ContactSection';
import ParagraphSection from '../ParagraphSection';
import TwoColumnItemSection from '../TwoColumnItemSection';
import TwoColumnListSection from '../TwoColumnListSection';
import TwoColumnIconSection from '../TwoColumnIconSection';

const SectionSet = (sections) => {
    var parseSections = (sections) => {
        var result = [];
        for (var i = 0; i < sections.length; i++) {
            var section = undefined;
            if (sections[i].type === 'paragraph') {
                section = <ParagraphSection
                    title={sections[i].title}
                    paragraph={sections[i].paragraph}
                    />;
            } else if ((sections[i].type === 'two_column_long_list')) {
                section = <TwoColumnItemSection
                    title={sections[i].title}
                    items={sections[i].items}
                    />;
            } else if ((sections[i].type === 'two_column_short_list')) {
                section = <TwoColumnListSection
                    title={sections[i].title}
                    items={sections[i].items}
                    />;
            } else if ((sections[i].type === 'two_column_icon_list')) {
                section = <TwoColumnIconSection
                    title={sections[i].title}
                    items={sections[i].items}
                    />;
            } else if ((sections[i].type === 'contact')) {
                section = <ContactSection
                    title={sections[i].title}
                    links={sections[i].links}
                    />;
            }
            result.push(
                <Row id={sections[i].title.toLowerCase()} className='section' key={'section'+i}>
                    {section}
                </Row>
            );
        }
        return result;
    };

    return (
        <Container>
            <Row>
                <Col className='col-1'>
                </Col>
                <Col className='col-10'>
                    {parseSections(sections.sections)}
                </Col>
                <Col className='col-1'>
                </Col>
            </Row>
        </Container>
    );
};

export default SectionSet;