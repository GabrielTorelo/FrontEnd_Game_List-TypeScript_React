import { BrowserRouter, Routes as NavRoutes, Route } from "react-router-dom";
import Home from "../../presentation/pages/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavRoutes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </NavRoutes>
    </BrowserRouter>
  );
};

export default Routes;
