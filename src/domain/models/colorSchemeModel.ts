export type ColorSchemeModel = {
    isDark: boolean
};

export interface IColorSchemeContextModel {
    mode: boolean;
    dispatch: (isDark: boolean) => void;
};
