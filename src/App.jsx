// src/App.js

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage"; 
import ViewProductPage from "./pages/ViewProductPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ViewProductPage />} />
      </Routes>
    </div>
  );
}
