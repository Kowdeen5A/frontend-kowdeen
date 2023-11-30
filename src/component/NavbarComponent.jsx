import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import classnames from 'classnames';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      changeBackgroundColor();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [changeColor]);

  return (
    <Navbar expand='lg' className={classnames({ 'color-active': changeColor })}>
      <Container>
        <Navbar.Brand href="/" className='fs-3 fw-bold'>
          Kow<span style={{ color: "#3A8B91" }} className=''>Deen</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{ textAlign: 'center' }}>
          <Nav.Link href="/" style={{ marginRight: '10px' }} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Home</Nav.Link>
      <Nav.Link href="/Company" style={{ marginRight: '10px' }}>Company</Nav.Link>
      <Nav.Link href="/Jobs-Application" style={{ marginRight: '10px' }}>Jobs-Application</Nav.Link>
      <Nav.Link href="/Jobs">Jobs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link href="/register">
            <span style={{ color: "#3A8B91" }}>Sign Up</span>
          </Nav.Link>
          <Nav.Link href="/login">
            <button
              type="button"
              className="btn btn-transparent border-2 px-5 rounded"
              style={{ borderColor: "#3A8B91", color: "#3A8B91" }}
            >
              LOGIN
            </button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
