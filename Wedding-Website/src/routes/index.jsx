import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LandingPage } from "pages/landing";
import { HeaderLayout } from "layouts/main_layouts";

const MainRoutes = () => {

    return(
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} /> 
            </Routes>
        </Router>
    );
}

export default MainRoutes;
