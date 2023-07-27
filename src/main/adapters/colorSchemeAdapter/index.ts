import { ColorSchemeModel } from '../../../domain/models/colorSchemeModel';
import { makeLocalStorageAdapter } from '../../factories/cache/localStorageAdapter';

export const setCurrentColorAdapter = (colorScheme: ColorSchemeModel): void => {
    makeLocalStorageAdapter().set('ColorScheme', colorScheme);
};

export const getCurrentColorAdapter = (): ColorSchemeModel => {
    return makeLocalStorageAdapter().get('ColorScheme');
};
