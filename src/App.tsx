import React from "react";
import Routes from "./main/routes";
import { ColorSchemeProvider } from "./presentation/hooks/colorSchemeProvider"

const App: React.FC = () => (
  <>
    <ColorSchemeProvider>
      <Routes />
    </ColorSchemeProvider>
  </>
);

export default App;
