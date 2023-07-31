import React from "react";
import Routes from "../routes";
import { ColorSchemeProvider } from "./hooks/colorSchemeProvider";
import "../../presentation/styles/index.scss"

const App: React.FC = () => {
    return (
        <ColorSchemeProvider>
            <Routes />
        </ColorSchemeProvider>
    );
};

export default App;
