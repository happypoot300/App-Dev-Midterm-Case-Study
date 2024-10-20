//bootstrap
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//css style
import Style from "../css modules/table.module.css";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
//react
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";

export default function ViewTable(props) {
  const frenchGray = "#d0d5db";

  const buttonProps = {
    as: NavLink,
    to: "/EditProductPage",
  };

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
              <td className="align-middle">{product.product_name}</td>
              <br />
              <td className="align-middle text-center">{product.price}</td>
              <br />
              <td className="align-middle">{product.description}</td>
              <br />
              <td className="align-middle">{product.category}</td>
              <br />
              <td className="align-middle text-center">{product.bar_code}</td>
              <br />
              <td className="align-middle text-center">
                {product.stock_quantity}
              </td>
              <br />
              <td className="align-middle">
                <Container fluid className="d-flex m-0 p-0">
                  <Button
                    variant="link"
                    className={Style.editButton}
                    {...buttonProps}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
                  </Button>
                  <Button
                    variant="link"
                    className={Style.deleteButton}
                    {...buttonProps}
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
