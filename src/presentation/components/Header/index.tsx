import React from 'react';
import ToggleSwitch from '../ToggleSwitch';
import './styles.scss';

const Header: React.FC = () => {
    return (
        <div className="header">
            <a href="/">
                <div className="imgLogo" />
            </a>
            <ToggleSwitch />
        </div>
    );
};

export default Header;
