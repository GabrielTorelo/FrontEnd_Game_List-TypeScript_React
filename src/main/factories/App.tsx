import React from "react";
import ColorSchemeProvider from "./providers/colorSchemeProvider";
import Routes from "../routes";
import "../../presentation/styles/index.scss"

const App: React.FC = () => {
    return (
        <ColorSchemeProvider>
            <Routes />
        </ColorSchemeProvider>
    );
};

export default App;
