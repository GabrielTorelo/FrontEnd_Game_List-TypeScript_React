import { BrowserRouter, Routes as NavRoutes, Route } from "react-router-dom";
// import { MakeHome, MakeGames } from "../factories/pages";
import { MakeHome } from "../factories/pages";

const Routes = () => {
    return (
        <BrowserRouter>
            <NavRoutes>
                <Route index path="/" element={<MakeHome />} />
                {/* <Route path="/games/:id" element={<MakeGames />} /> */}
            </NavRoutes>
        </BrowserRouter>
    );
};

export default Routes;
