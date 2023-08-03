import React from 'react';
import { IColorSchemeContextModel } from '../../../domain/models/colorSchemeModel';
import ToggleSwitch from '../ToggleSwitch';
import './styles.scss';

const Header: React.FC<IColorSchemeContextModel> = ({ mode, dispatch }) => {
    return (
        <div className="header">
            <a href="/">
                <div className="imgLogo" />
            </a>
            <ToggleSwitch  mode={mode} dispatch={dispatch} />
        </div>
    );
};

export default Header;
