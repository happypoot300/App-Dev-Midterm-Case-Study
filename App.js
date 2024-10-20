// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditProduct from './EditProduct';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/products/edit/:productId" element={<EditProduct />} />
               
            </Routes>
        </Router>
    );
}

export default App;
