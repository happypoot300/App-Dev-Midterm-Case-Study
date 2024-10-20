import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Form from "react-bootstrap/Form";
import Style from "../css modules/addproduct.module.css";
import ViewProductPage from "./ViewProductPage.jsx";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    product_name: "",
    price: "",
    description: "",
    category: "",
    bar_code: "",
    stock_quantity: "",
  });

  const [isFormSubmitted, setFormSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log(formData); // Post the data to the API

    fetch("http://127.0.0.1:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log("Response:", response); // log the response
        return response.json(); // parse the response as JSON
      })
      .then((data) => {
        console.log("Success:", data);
        setFormSubmitted(true);
        // You can reset the form or display a success message here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  if (isFormSubmitted) {
    return <ViewProductPage />;
  }

  return (
    <div className={Style.addProductContainer}>
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="product_name"
            value={formData.product_name}
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

        <Form.Group controlId="formBarcode">
          <Form.Label>Barcode</Form.Label>
          <Form.Control
            type="text"
            name="bar_code"
            value={formData.bar_code}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formQuantity">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            type="number"
            name="stock_quantity"
            value={formData.stock_quantity}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" name={"ADD PRODUCT"} />
      </Form>
    </div>
  );
}
