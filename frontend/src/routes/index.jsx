// src/routes/index.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard.jsx";
import Properties from "../pages/Properties.jsx";
import Tenants from "../pages/Tenants.jsx";
import Units from "../pages/Units.jsx";
import Financials from "../pages/Financials.jsx";
import Utilities from "../pages/Utilities.jsx";
import Maintenance from "../pages/Maintenance.jsx";
import PropertyGrouping from "../pages/PropertyGrouping.jsx";
import Communication from "../pages/Communication.jsx";
import Reports from "../pages/Reports.jsx";
import Settings from "../pages/Settings.jsx";
import NotFound from "../pages/NotFound.jsx";

import MainLayout from "../layouts/MainLayout.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/units" element={<Units />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/property-grouping" element={<PropertyGrouping />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
