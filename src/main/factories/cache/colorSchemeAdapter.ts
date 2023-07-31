import { getCurrentColorAdapter } from '../../adapters/colorSchemeAdapter';
import { ColorSchemeModel } from '../../../domain/models/colorSchemeModel';
import { darkModeMediaQuery } from '../../../infra/preferences/user/colorSchemeQuery';

const getCurrentColor = getCurrentColorAdapter();

const checkNull = Object.keys(getCurrentColor).length !== 0
    ? getCurrentColor.isDark
    : darkModeMediaQuery.matches

const initState: ColorSchemeModel = {
    isDark: checkNull
};

export { initState };