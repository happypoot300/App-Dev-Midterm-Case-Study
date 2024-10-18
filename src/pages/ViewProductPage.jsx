import { NavLink, Link } from "react-router-dom";
// Bootstrap
import Button from "../components/Button.jsx";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// Components
import Table from "../components/Table.jsx";
// CSS style
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

        <div className={Style.loginContainer}>
          <Link to="/login" className={`${Style.addButton}`}> 
            Log out
          </Link>
        </div>

        <div className={Style.tableContainer}>
          <div className={Style.buttonContainer}>
            <Button
              className={Style.addButton}
              name={"+ ADD PRODUCT"}
              onClick={addProductEvent}
              {...buttonProps}
            ></Button>
            <div className={Style.searchContainer}>
              <Form.Control
                className={Style.searchInput}
                placeholder="Search"
              />
              <Button className={Style.searchButton} name={"SEARCH"}></Button>
            </div>
          </div>

          <Table />
        </div>
      </header>
    </section>
  );
}
