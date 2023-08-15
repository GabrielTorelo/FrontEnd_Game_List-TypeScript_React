import { BrowserRouter, Routes as NavRoutes, Route } from "react-router-dom";
import DefaultProvider from '../factories/providers/defaultProvider';
import { MakeHome, MakeGames } from "../factories/pages";   

const Routes = () => {
    return (
        <BrowserRouter>
            <DefaultProvider>
                <NavRoutes>
                    <Route index path="/" element={<MakeHome />} />
                    <Route path="/games/:id" element={<MakeGames />} />
                </NavRoutes>
            </DefaultProvider>
        </BrowserRouter>
    );
};

export default Routes;
