export const updateBodyScheme = (mode: boolean) => {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
        bodyElement.classList.remove('schemeDark', 'schemeLight');
        bodyElement.classList.add(`${mode ? 'schemeDark' : 'schemeLight'}`);
    }
};
