import { React, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailNav from '../../components/DetailNav';
import SectionSet from '../../components/SectionSet';
import ScrollButton from '../../components/ScrollButton';
import DetailPresentation from '../../components/DetailPresentation';

const Details = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const regex = /^0[0-6]{1}$/.test(id);

    useEffect(() => {
        if (!regex) {
            navigate("/error");
        }
    }, []);

    if (regex) {
        var config = props.config;
        var page = props.config.projects[id];
        return (
            <>
                <DetailPresentation config={config} page={page}/>
                <DetailNav config={config} sections={page.sections}/>
                <SectionSet config={config} sections={page.sections}/>
                <ScrollButton config={config}/>
            </>
        );
    }
};

export default Details;