// EditProduct.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate(); 

    const [product, setProduct] = useState({
        barcode: '',
        description: '',
        price: '',
        quantity: '',
        category: ''
    });

    const [loading, setLoading] = useState(true);

    // Fetch product details when the component loads
    useEffect(() => {
        axios.get(/api/products/${productId})
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                setLoading(false);
            });
    }, [productId]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    // Handle form submission to update the product
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(/api/products/${productId}, product)
            .then(response => {
                console.log('Product updated:', response.data);
                navigate('/products'); // Redirect to the product list after editing
            })
            .catch(error => {
                console.error('Error updating product:', error);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Edit Product</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBarcode">
                    <Form.Label>Barcode</Form.Label>
                    <Form.Control
                        type="text"
                        name="barcode"
                        value={product.barcode}
                        onChange={handleChange}
                        readOnly // Disable editing for the barcode field
                    />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update Product
                </Button>
            </Form>
        </div>
    );
};

export default EditProduct;
