//imports
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//pages
import ViewProductPage from "./pages/ViewProductPage";
//components

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ViewProductPage />} />
      </Routes>
    </div>
  );
}
