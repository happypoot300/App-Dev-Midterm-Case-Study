//bootstrap
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
//css style
import Style from "../css modules/table.module.css";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faTrash,
  faArrowUp,
  faArrowDown,
  faPenToSquare,
  faPesoSign,
} from "@fortawesome/free-solid-svg-icons";
//react
import { Link } from "react-router-dom";
//barcode
import BarcodeGenerator from "./BarcodeGenerator";

export default function ViewTable(props) {
  console.log("ViewTable re-rendered");

  const frenchGray = "#d0d5db";
  const pesoSign = {
    peso: <FontAwesomeIcon icon={faPesoSign} />,
  };

  function handleDelete(id) {
    console.log("handleDelete called with id:", id);
    fetch(`http://127.0.0.1:8000/api/products/${id}`, { method: "DELETE" })
      .then(() => props.updateProductsList())
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
                <Dropdown align="end">
                  <Dropdown.Toggle variant="link" id="dropdown-basic">
                    <FontAwesomeIcon
                      className={Style.filterIcon}
                      icon={faFilter}
                      size="lg"
                      style={{ color: "4470FE" }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="text-center m-0 p-0">
                    <Dropdown.Item
                      className="m-0 p-0"
                      onClick={() => props.updateDefaultTable()}
                    >
                      <p>-- Default --</p>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="m-0 p-0"
                      onClick={() =>
                        props.sortProductsOrder("product_name", "asc")
                      }
                    >
                      <p>A-Z</p>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="m-0 p-0"
                      onClick={() =>
                        props.sortProductsOrder("product_name", "desc")
                      }
                    >
                      <p>Z-A</p>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </th>
            <br />

            <th style={{ backgroundColor: frenchGray }}>
              <div className={Style.filterContainer}>
                <label className="text-nowrap">Price</label>
                <Dropdown align="end">
                  <Dropdown.Toggle variant="link" id="dropdown-basic">
                    <FontAwesomeIcon
                      className={Style.filterIcon}
                      icon={faFilter}
                      size="lg"
                      style={{ color: "4470FE" }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="text-center m-0 p-0">
                    <Dropdown.Item
                      className="d-flex justify-content-center  m-0 pt-2"
                      onClick={() => props.updateDefaultTable()}
                    >
                      <p className={Style.p}>-- Default --</p>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="d-flex justify-content-center  m-0 pt-2"
                      onClick={() => props.sortProductsOrder("price", "asc")}
                    >
                      <p className={Style.p}>Low - High</p>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        className="pt-1"
                        style={{ color: "7899FF" }}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="d-flex justify-content-center m-0 pb-2"
                      onClick={() => props.sortProductsOrder("price", "desc")}
                    >
                      <p className={Style.p}>High - Low</p>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="pt-1"
                        style={{ color: "7899FF" }}
                      />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </th>

            <br />

            <th style={{ backgroundColor: frenchGray }}>
              <Container className="pb-2 m-0 ">
                <label className="text-nowrap">Description</label>
              </Container>
            </th>
            <br />

            <th style={{ backgroundColor: frenchGray }}>
              <div className={Style.filterContainer}>
                <label className="text-nowrap">Category</label>
                <Dropdown align="end">
                  <Dropdown.Toggle variant="link" id="dropdown-basic">
                    <FontAwesomeIcon
                      className={Style.filterIcon}
                      icon={faFilter}
                      size="lg"
                      style={{ color: "4470FE" }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="m-0 pt-2 pb-2">
                    <Dropdown.Item
                      className="m-0 pl-1"
                      onClick={() => props.updateDefaultTable()}
                    >
                      -- Default --
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="m-0 pl-1"
                      onClick={() => props.sortProductsCategory("Automotive")}
                    >
                      Automotive
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="m-0 pl-1"
                      onClick={() =>
                        props.sortProductsCategory("Beauty & Personal Care")
                      }
                    >
                      Beauty & Personal Care
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="m-0 pl-1"
                      onClick={() => props.sortProductsCategory("Electronics")}
                    >
                      Electronics
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="m-0 pl-1"
                      onClick={() => props.sortProductsCategory("Fashion")}
                    >
                      Fashion
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="m-0 pl-1"
                      onClick={() =>
                        props.sortProductsCategory("Health & Fitness")
                      }
                    >
                      Health & Fitness
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="m-0 pl-1"
                      onClick={() =>
                        props.sortProductsCategory("Home & Kitchen")
                      }
                    >
                      Home & Kitchen
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="m-0 pl-1"
                      onClick={() =>
                        props.sortProductsCategory("Sports & Outdoors")
                      }
                    >
                      Sports & Outdoors
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="m-0 pl-1"
                      onClick={() => props.sortProductsCategory("Toys & Games")}
                    >
                      Toys & Games
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </th>
            <br />

            <th style={{ backgroundColor: frenchGray }}>
              <Container className="pb-2 m-0 ">
                <label className="text-nowrap">Bar Code</label>
              </Container>
            </th>
            <br />

            <th style={{ backgroundColor: frenchGray }}>
              <div className={Style.filterContainer}>
                <label className="text-nowrap">Stock Quantity</label>
                <Dropdown align="end">
                  <Dropdown.Toggle variant="link" id="dropdown-basic">
                    <FontAwesomeIcon
                      className={Style.filterIcon}
                      icon={faFilter}
                      size="lg"
                      style={{ color: "4470FE" }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="text-center m-0 p-0">
                    <Dropdown.Item
                      className="d-flex justify-content-center  m-0 pt-2"
                      onClick={() => props.updateDefaultTable()}
                    >
                      <p className={Style.p}>-- Default --</p>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="d-flex justify-content-center  m-0 pt-2"
                      onClick={() =>
                        props.sortProductsOrder("stock_quantity", "asc")
                      }
                    >
                      <p className={Style.p}>Low - High</p>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        className="pt-1"
                        style={{ color: "7899FF" }}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="d-flex justify-content-center m-0 pb-2"
                      onClick={() =>
                        props.sortProductsOrder("stock_quantity", "desc")
                      }
                    >
                      <p className={Style.p}>High - Low</p>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="pt-1"
                        style={{ color: "7899FF" }}
                      />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </th>
            <br />

            <th style={{ backgroundColor: frenchGray }}>
              <Container className="pb-2 m-0 ">
                <label className="text-nowrap">Action</label>
              </Container>
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
                {pesoSign.peso}
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
                <BarcodeGenerator data={product.bar_code} />
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
