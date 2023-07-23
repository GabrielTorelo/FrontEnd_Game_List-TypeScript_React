import React from 'react';
import Links from '../Links';
import LinksWeb from '../../constants/linksWeb';
import './styles.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <Links />
            <h3>
                💻 Desenvolvido por
                <a href={LinksWeb.LINKEDIN} target="_blank">
                    &nbsp;Gabriel Torelo&nbsp;
                </a>
                💻
            </h3>
        </div>
    );
};

export default Footer;
