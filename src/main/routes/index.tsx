import { useContext } from "react";
import { BrowserRouter, Routes as NavRoutes, Route } from "react-router-dom";
import { ColorSchemeContext } from "../factories/contexts/colorScheme";
import Home from "../../presentation/pages/home";

const Routes = () => {
    const theme = useContext(ColorSchemeContext);
    const mode = theme.mode;
    const dispatch = theme.dispatch;

    return (
        <BrowserRouter>
            <NavRoutes>
                <Route path="/">
                    <Route index element={<Home mode={mode} dispatch={dispatch} />} />
                </Route>
            </NavRoutes>
        </BrowserRouter>
    );
};

export default Routes;
