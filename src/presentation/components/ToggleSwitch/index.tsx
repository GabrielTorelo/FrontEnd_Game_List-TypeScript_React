import React from 'react';
import useToggleState from '../../hooks/useToggleState';
import './styles.scss';

const ToggleSwitch: React.FC = () => {
    const [switchState, handleOnChange] = useToggleState(true);

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
