import React from 'react';
import useToggleState from '../../hooks/useToggleState';
import { IColorSchemeContextModel } from '../../../domain/models/colorSchemeModel';
import './styles.scss';

const ToggleSwitch: React.FC<IColorSchemeContextModel> = ({ mode, dispatch }) => {
    const reverseMode = !mode;
    const [switchState, handleOnChange] = useToggleState(reverseMode);

    return (
        <label className={`toggleSwitch ${switchState ? "light" : "dark"}`} htmlFor="checkbox">
            <input
                id="checkbox"
                type="checkbox"
                checked={switchState}
                onChange={handleOnChange}
            />
        </label>
    );
};

export default ToggleSwitch;
