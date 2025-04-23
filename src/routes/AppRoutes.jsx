// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import all your page components
import Dashboard from "../Components/Dashboard";
import AboutUs from "../Components/AboutUs";
import PersonalLogin from "../Components/PersonalLogin";
import PersonalRegister from "../Components/PersonalRegister";
import SavingAccount from "../Components/SavingAccount";
import CorporateHome from "../Components/Corporate/CorporateHome";
import CurrentAccount from "../Components/Corporate/CurrentAccount";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<PersonalLogin />} />
      <Route path="/register" element={<PersonalRegister />} />
      <Route path="/saving-account" element={<SavingAccount />} />
      <Route path="/corporate" element={<CorporateHome />} />
      <Route path="/corporate-current-account" element={<CurrentAccount />} />
    </Routes>
  );
};

export default AppRoutes;
