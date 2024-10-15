import { NavLink } from "react-router-dom";
//bootstrap
import Button from "../components/Button.jsx";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
//components
import Table from "../components/Table.jsx";
//css style
import Style from "../css modules/viewproductpage.module.css";

export default function ViewProductPage() {
  function addProductEvent() {
    console.log("addProductIsClicked, this is a test event");
  }

  const buttonProps = {
    as: NavLink,
    to: "/AddProductPage",
  };

  return (
    <section>
      <header>
        <div className={Style.header__Title}>
          <h1>E-Com Product Management</h1>
          <div className={Style.header__imgIcon}></div>
        </div>
        <h2>All Tasks</h2>

        <div className={Style.tableContainer}>
          <div className={Style.buttonContainer}>
            <Button
              className={Style.addButton}
              name={"+ ADD PRODUCT"}
              onClick={addProductEvent}
              {...buttonProps}
            ></Button>
            <div className={Style.searchContainer}>
              <InputGroup>
                <Form.Control
                  className={Style.searchInput}
                  placeholder="Search"
                />
                <Button className={Style.searchButton} name={"SEARCH"}></Button>
              </InputGroup>
            </div>
          </div>

          <Table />
        </div>
      </header>
    </section>
  );
}
