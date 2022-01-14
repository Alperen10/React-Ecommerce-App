import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Container, Dropdown } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { storeProducts } from '../../data';

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [userName, setUserName] = useState("")
  const [isShow, setİsShow] = useState(true)

  // if (localStorage.getItem('userName') == "") {
  //   setİsShow(false);
  // }

  useEffect(() => {

    if (localStorage.getItem('userName') == "") {
      setİsShow(false);
    }

  }, [isShow])

  function ButtonClick() {
    if (isShow) {
      localStorage.setItem('userName', '');
      console.log(localStorage.getItem('userName'));
      setİsShow(false);
    }
  }

  return (
    <>
      <Navbar color="dark" light expand="md">
        <Container fluid>
          <Link onClick={() => localStorage.setItem('category', '')} className="navbar-brand" to="/" style={{ color: 'white' }}>
            Alsana.com
          </Link>


          {
            isShow ? <>
              <Link onClick={() => localStorage.setItem('category', '')} className="navbar-brand" to="/cart" style={{ color: 'white' }}>
                {localStorage.getItem('userName')}
              </Link>
            </> : <></>
          }
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={toggle} navbar>
            <Nav className="ms-auto" navbar>
              <Dropdown variant="dark">
                <Dropdown.Toggle id="dropdown-button-dark-example" variant="dark">
                  Products
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item onClick={() => localStorage.setItem('category', 'electronic')} href="/electronic">Electronic</Dropdown.Item>
                  <Dropdown.Item onClick={() => localStorage.setItem('category', 'clothes')} href="/clothes">Clothes</Dropdown.Item>
                  <Dropdown.Item onClick={() => localStorage.setItem('category', 'sport')} href="/sport">Sport</Dropdown.Item>
                  <Dropdown.Item onClick={() => localStorage.setItem('category', 'book')} href="/book">Book</Dropdown.Item>
                  <Dropdown.Item onClick={() => localStorage.setItem('category', 'homeStuff')} href="/homeStuff">Home Stuff</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <NavItem>
                <Link to="/cart" className="nav-link" style={{ color: 'white' }}>
                  Cart
                </Link>
              </NavItem>
              <NavItem>

                {
                  isShow ? <>
                    <div onClick={ButtonClick} className="nav-link" style={{ color: 'white' }}>
                      Sign Out
                    </div>
                  </> : <>
                    <Link to="/signUp" className="nav-link" style={{ color: 'white' }}>
                      Sign Up
                    </Link>
                  </>
                }

                {/* <Link onClick={() => ButtonClick()} to="/signUp" className="nav-link" style={{ color: 'white' }}>

                  {
                    isShow ? <>
                      Sign Out
                    </> : <>
                      Login
                    </>
                  }
                </Link> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
        <SearchBar placeholder="Search..." data={storeProducts} />
      </Navbar>
    </>
  );
};

export default NavigationBar;
