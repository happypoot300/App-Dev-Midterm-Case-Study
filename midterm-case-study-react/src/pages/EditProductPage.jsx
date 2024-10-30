//react
import React, { useState, useEffect } from "react";
//react dom
import { Link, useNavigate, useParams } from "react-router-dom";
//bootstrap
import { Form, Button, Container } from "react-bootstrap";
//css style
import Style from "../css modules/editproduct.module.css";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function EditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("ID: ", id);

  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:", formData);

    fetch(`http://127.0.0.1:8000/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log("Response:", response);
        return response.json();
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
    navigate("/viewProductPage");
  }

  return (
    <Container fluid className="pt-5 m-0">
      <div className={Style.editProductContainer}>
        <Container className="d-flex justify-content-between">
          <h2>Edit Product Details</h2>
          <Link to="/viewProductPage">
            <FontAwesomeIcon className="pt-2" icon={faChevronLeft} size="2xl" />
          </Link>
        </Container>
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
              defaultValue={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a Category</option>
              <option value="Automotive">Automotive</option>
              <option value="Beauty and Personal Care">
                Beauty and Personal Care
              </option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Health and Fitness">Health and Fitness</option>
              <option value="Home and Kitchen">Home and Kitchen</option>
              <option value="Sports & Outdoors">Sports & Outdoors</option>
              <option value="Toys & Games">Toys & Games</option>
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
            <Form.Label>Stock Quantity</Form.Label>
            <Form.Control
              type="number"
              name="stock_quantity"
              value={formData.stock_quantity}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button className={Style.button} type="submit">
            EDIT PRODUCT
          </Button>
        </Form>
      </div>
    </Container>
  );
}
