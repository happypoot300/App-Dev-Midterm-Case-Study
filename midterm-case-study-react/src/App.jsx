//imports
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//pages
import ViewProductPage from "./pages/ViewProductPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
//components

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/ViewProductPage" element={<ViewProductPage />} />
        <Route path="/addProductPage" element={<AddProductPage />} />
        <Route path="/editProductPage/:id" element={<EditProductPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
