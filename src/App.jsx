import React from "react";
import Navbar from "./Components/Layouts/NavBar";
import Footer from "./Components/Layouts/Footer";
import HomePage from "./Components/Pages/HomePage";
import ProductPage from "./Components/Pages/ProductPage";
import StepsPage from "./Components/Pages/StepsPage";
import AboutPage from "./Components/Pages/AboutPage";
import DashboardPage from "./Components/Pages/DashboardPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <HomePage />
                <ProductPage />
                <StepsPage />
                <AboutPage />
              </React.Fragment>
            }
          />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
