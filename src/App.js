import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"
import Brand from "./components/Pages/Brand";
import Home from "./components/Pages/Home";
import Layout from "./components/Pages/Layout";
import Login from "./components/Pages/Login";
import Mens from "./components/Pages/Mens";
import Store from "./components/Pages/Store";
import Womens from "./components/Pages/Womens";
import { useMediaQuery } from 'react-responsive'
import "./stylesheets/main.scss";



function App() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)'
  })


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout isDesktop={isDesktop} />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="login" element={<Login />} />
          <Route path="brands" element={<Brand />} />
          <Route path="womens" element={<Womens />} />
          <Route path="mens" element={<Mens />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
