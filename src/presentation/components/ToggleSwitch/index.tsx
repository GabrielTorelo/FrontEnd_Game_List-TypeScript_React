import React from 'react';
import useToggleState from '../../hooks/useToggleState';
import { IColorSchemeContextModel } from '../../../domain/models/colorSchemeModel';
import './styles.scss';

const ToggleSwitch: React.FC<IColorSchemeContextModel> = ({ mode, dispatch }) => {
    const reverseMode = !mode;
    const [switchState, handleOnChange] = useToggleState(reverseMode);

    const handleChange = () => {
        handleOnChange();
        dispatch(switchState);
    };

    return (
        <label className={`toggleSwitch ${switchState ? "light" : "dark"}`} htmlFor="checkbox">
            <input
                id="checkbox"
                type="checkbox"
                checked={switchState}
                onChange={handleChange}
            />
        </label>
    );
};

export default ToggleSwitch;
