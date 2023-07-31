import { useReducer, useEffect, ReactNode } from 'react';
import { ColorSchemeContext } from '../contexts/colorScheme';
import { setCurrentColorAdapter } from '../../adapters/colorSchemeAdapter';
import { initState } from '../cache/colorSchemeAdapter';

const colorSchemeReducer = (_: any, isDark: boolean) => (isDark ? true : false);

export const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, dispatch] = useReducer(colorSchemeReducer, initState.isDark);

    useEffect(() => {
        setCurrentColorAdapter({ isDark: mode });
    }, [mode]);

    return (
        <ColorSchemeContext.Provider value={{ mode, dispatch }}>
            {children}
        </ColorSchemeContext.Provider>
    );
};