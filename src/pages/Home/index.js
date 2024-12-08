import React from 'react';
import ScrollButton from '../../components/ScrollButton';
import Presentation from '../../components/Presentation';
import SectionSet from '../../components/SectionSet';
import MainNav from '../../components/MainNav';

const Home = (props) => {
    var config = props.config;
    var page = props.config.home;
    return (
        <>
            <Presentation config={config} info={page}/>
            <MainNav config={config} sections={page.sections}/>
            <SectionSet config={config} sections={page.sections}/>
            <ScrollButton config={config}/>
        </>
    );
};

export default Home;