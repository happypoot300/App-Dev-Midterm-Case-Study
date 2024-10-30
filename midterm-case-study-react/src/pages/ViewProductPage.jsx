//react
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//bootstrap
import Button from "../components/Button.jsx";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
//css style
import Style from "../css modules/viewproductpage.module.css";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
//components
import Table from "../components/Table.jsx";
import { useNavigate } from "react-router-dom";

export default function ViewProductPage() {
  const [addButton, setAddButton] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  //gets all products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((products) => setProducts(products))
      .catch((error) => console.error("Error fetching data", error));
  }, []);
  //end

  function updateProductsList() {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setSearchResults([]);
      })
      .catch((error) => console.error("Error fetching data", error));
  }

  function handleSearchQuery() {
    const searchQueryLower = searchQuery;
    const filteredProducts = products.filter((product) => {
      return (
        product.product_name.includes(searchQueryLower) ||
        product.price.toLowerCase().includes(searchQueryLower) ||
        product.description.includes(searchQueryLower) ||
        product.category.includes(searchQueryLower) ||
        product.bar_code.includes(searchQueryLower) ||
        product.stock_quantity
          .toString()
          .toLowerCase()
          .includes(searchQueryLower)
      );
    });
    setSearchResults(filteredProducts);
  }

  function updateDefaultTable() {
    return fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((products) => {
        console.log(products);
        setProducts(products);
        setSearchResults([]);
      })
      .catch((error) => console.error("Error fetching data", error));
  }

  function sortProductsOrder(column_name, orderBy) {
    console.log("sortProductOrder was called ");
    fetch(
      `http://127.0.0.1:8000/api/products?sort=${column_name}&order=${orderBy}`
    )
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setSearchResults([]);
      })
      .catch((error) => console.error("Error fetching data", error));
  }

  function sortProductsCategory(category_name) {
    fetch(`http://127.0.0.1:8000/api/products?category=${category_name}`)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setSearchResults([]);
      })
      .catch((error) => console.error("Error fetching data", error));
  }

  function handleLogout() {
    navigate("/", { replace: true });
  }

  return (
    <section>
      <header>
        <div className={Style.header__Title}>
          <div className={Style.titleLayout}>
            <h1>E-Com Product Management</h1>
            <div className={Style.header__imgIcon}></div>
          </div>

          <Dropdown className={Style.header__userIcon}>
            <Dropdown.Toggle
              className={Style.iconBorder}
              variant="link"
              id="dropdown-basic"
            >
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                style={{ color: "4470FE" }}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="m-0 p-0">
              <Button
                className="d-flex justify-content-center align-items-center dropdown-item  m-0 p-0"
                name={"Log Out"}
                onClick={handleLogout}
              ></Button>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <h2>Product List</h2>
        <Container fluid>
          <div className={Style.tableContainer}>
            <div className={Style.buttonContainer}>
              <Link to="/addProductPage">
                <Button
                  className={Style.addButton}
                  name={"+ ADD PRODUCT"}
                  onClick={() => setAddButton(true)}
                ></Button>
              </Link>
              <div className={Style.searchContainer}>
                <InputGroup>
                  <Form.Control
                    className={Style.searchInput}
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(event) => {
                      setSearchQuery(event.target.value);
                    }}
                  />
                  <Button
                    className={Style.searchButton}
                    name={"SEARCH"}
                    onClick={handleSearchQuery}
                  ></Button>
                </InputGroup>
              </div>
            </div>
            <Table
              products={searchResults.length > 0 ? searchResults : products}
              updateProductsList={updateProductsList}
              updateDefaultTable={updateDefaultTable}
              sortProductsOrder={sortProductsOrder}
              sortProductsCategory={sortProductsCategory}
            />
          </div>
        </Container>
      </header>
    </section>
  );
}
