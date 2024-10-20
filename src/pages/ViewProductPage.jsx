import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//bootstrap
import Button from "../components/Button.jsx";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
//components
import Table from "../components/Table.jsx";
import AddProductPage from "./AddProductPage.jsx";
import EditProductPage from "./EditProductPage.jsx";
//css style
import Style from "../css modules/viewproductpage.module.css";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ViewProductPage() {
  const [addButton, setAddButton] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
    const filteredProducts = products.filter((product) => {
      const searchQueryLower = searchQuery.toLowerCase();
      return product.product_name.toLowerCase().includes(searchQueryLower);
    });
    setSearchResults(filteredProducts);
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

            <Dropdown.Menu>
              <Link to="/" className="dropdown-item text-center">
                Log Out
              </Link>
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
            />
          </div>
        </Container>
      </header>
    </section>
  );
}
