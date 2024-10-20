import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  if (isFormSubmitted) {
    return <ViewProductPage />;
  }

  return (
    <Container fluid className="pt-5 m-0">
      <div className={Style.addProductContainer}>
        <h2>Add New Product</h2>
        <Form clasName={Style.form} onSubmit={handleSubmit}>
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
              as="select"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a Category</option>
              <option value="automotive">Automotive</option>
              <option value="beauty-and-personal-care">
                Beauty and Personal Care
              </option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="health-and-fitness">Health and Fitness</option>
              <option value="home-and-kitchen">Home and Kitchen</option>
              <option value="sports-and-outdoors">Sports & Outdoors</option>
              <option value="toys-and-games">Toys & Games</option>
            </Form.Control>
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

          <Button className={Style.button} type="submit" name={"ADD PRODUCT"} />
        </Form>
      </div>
    </Container>
  );
}
