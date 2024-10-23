import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Certificates from "./pages/Certificates/Certificates";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}
