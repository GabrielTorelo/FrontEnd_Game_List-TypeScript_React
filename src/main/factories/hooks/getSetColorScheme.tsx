import { useReducer, useEffect } from 'react';
import { initState } from '../cache/colorSchemeAdapter';
import { setCurrentColorAdapter } from '../../adapters/colorSchemeAdapter';
import { updateBodyScheme } from '../../../utils';

const getSetColorScheme = () => {
    const colorSchemeReducer = (_: any, isDark: boolean) => (isDark ? true : false);
    const [mode, dispatch] = useReducer(colorSchemeReducer, initState.isDark);

    useEffect(() => {
        setCurrentColorAdapter({ isDark: mode });
        updateBodyScheme(mode);
    }, [mode]);

    return { mode, dispatch };
};

export default getSetColorScheme;
