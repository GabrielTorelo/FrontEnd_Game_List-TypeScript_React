import React from 'react';
import LinksWeb from '../../constants/linksWeb';
import './styles.scss';

const Links: React.FC = () => {
    return (
        <div className="links">
            <a href={LinksWeb.GITHUB} target="_blank">
                <div className="gitHub" />
            </a>
            <a href={LinksWeb.GITLAB} target="_blank">
                <div className="gitLab" />
            </a>
            <a href={LinksWeb.LINKEDIN} target="_blank">
                <div className="linkedIn" />
            </a>
            <a href={LinksWeb.POSTMAN} target="_blank">
                <div className="postman" />
            </a>
        </div>
    );
};

export default Links;
