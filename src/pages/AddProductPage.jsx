import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button.jsx";
import Form from "react-bootstrap/Form";
import Style from "../css modules/addproduct.module.css";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    barcode: "",
    description: "",
    price: "",
    quantity: "",
    category: ""
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // POST request to your Laravel API
    const response = await fetch("http://your-api-url/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Redirect to ViewProductPage on successful addition
      history.push("/ViewProductPage");
    } else {
      // Handle error here
      console.error("Error adding product");
    }
  };

  return (
    <div className={Style.addProductContainer}>
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBarcode">
          <Form.Label>Barcode</Form.Label>
          <Form.Control
            type="text"
            name="barcode"
            value={formData.barcode}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formQuantity">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" name={"ADD PRODUCT"} />
      </Form>
    </div>
  );
}
