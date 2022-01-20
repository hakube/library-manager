import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Dashboard/>} />
            <Route exact path="/users" element={<Users/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
