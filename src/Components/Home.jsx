import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import LoginScreen from "./LoginScreen";
import Register from "./Register";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginscreen/:email" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};

export default Home;
