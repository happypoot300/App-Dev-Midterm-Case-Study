//bootstrap
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
//css style
import Style from "../css modules/table.module.css";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
//react
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ViewProductPage from "../pages/ViewProductPage";

export default function ViewTable(props) {
  console.log("ViewTable re-rendered");

  const frenchGray = "#d0d5db";

  function handleDelete(id) {
    fetch(`http://127.0.0.1:8000/api/products/${id}`, { method: "DELETE" })
      .then((response) => response.ok && props.updateProductsList())
      .catch((error) => console.error("Error deleting product:", error));
  }

  return (
    <Container fluid className="p-0 m-0">
      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th style={{ backgroundColor: frenchGray }}>
              <div className={Style.filterContainer}>
                <label className="text-nowrap">Product Name</label>
                <FontAwesomeIcon
                  className={Style.filterIcon}
                  size="lg"
                  icon={faFilter}
                />
              </div>
            </th>
            <br />

            <th style={{ backgroundColor: frenchGray }}>
              <div className={Style.filterContainer}>
                <label className="text-nowrap">Price</label>
                <FontAwesomeIcon
                  className={Style.filterIcon}
                  size="lg"
                  icon={faFilter}
                />
              </div>
            </th>

            <br />

            <th style={{ backgroundColor: frenchGray }}>Description</th>
            <br />

            <th style={{ backgroundColor: frenchGray }}>
              <div className={Style.filterContainer}>
                <label className="text-nowrap">Category</label>
                <FontAwesomeIcon
                  className={Style.filterIcon}
                  size="lg"
                  icon={faFilter}
                />
              </div>
            </th>
            <br />

            <th style={{ backgroundColor: frenchGray }}>
              <label className="text-nowrap">Bar Code</label>
            </th>
            <br />

            <th style={{ backgroundColor: frenchGray }}>
              <div className={Style.filterContainer}>
                <label className="text-nowrap">Stock Quality</label>
                <FontAwesomeIcon
                  className={Style.filterIcon}
                  size="lg"
                  icon={faFilter}
                />
              </div>
            </th>
            <br />

            <th style={{ backgroundColor: frenchGray }}>
              <label className="text-nowrap">Action</label>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <td
                style={{ maxWidth: "250px" }}
                className="text-truncate align-middle"
              >
                {product.product_name}
              </td>
              <br />
              <td
                style={{ maxWidth: "150px" }}
                className="text-truncate align-middle text-center"
              >
                {product.price}
              </td>
              <br />
              <td
                style={{ maxWidth: "400px" }}
                className="text-truncate align-middle"
              >
                {product.description}
              </td>
              <br />
              <td className="text-truncate align-middle">{product.category}</td>
              <br />
              <td className="text-truncate align-bottom text-center">
                {product.bar_code}
              </td>
              <br />
              <td
                style={{ maxWidth: "100px" }}
                className="text-truncate align-middle text-center"
              >
                {product.stock_quantity}
              </td>
              <br />
              <td style={{ maxWidth: "90px" }} className="align-middle">
                <Container fluid className={Style.buttonContainer}>
                  <Link to={`/editProductPage/${product.id}`}>
                    <Button variant="link" className={Style.editButton}>
                      <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
                    </Button>
                  </Link>

                  <Button
                    variant="link"
                    className={Style.deleteButton}
                    onClick={() => handleDelete(product.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} size="2xl" />
                  </Button>
                </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
