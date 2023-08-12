import { ReactNode } from 'react';
import getSetColorScheme from '../hooks/getSetColorScheme';
import { ColorSchemeContext } from '../contexts/colorScheme';

const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
    const { mode, dispatch } = getSetColorScheme();

    return (
        <ColorSchemeContext.Provider value={{ mode, dispatch }}>
            {children}
        </ColorSchemeContext.Provider>
    );
};

export default ColorSchemeProvider;
