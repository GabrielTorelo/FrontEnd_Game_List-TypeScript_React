import { createContext } from 'react';
import { IColorSchemeContextModel } from '../../../domain/models/colorSchemeModel';
import { initState } from '../cache/colorSchemeAdapter';

export const ColorSchemeContext = createContext<IColorSchemeContextModel>({
    mode: initState.isDark,
    dispatch: () => {}
});
