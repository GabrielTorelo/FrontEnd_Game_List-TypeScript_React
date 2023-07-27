import { createContext } from 'react';
import { IColorSchemeContextModel } from '../../domain/models/colorSchemeModel';
import { initState } from '../hooks/colorSchemeProvider';

export const ColorSchemeContext = createContext<IColorSchemeContextModel>({
    mode: initState.isDark,
    dispatch: () => {}
});
