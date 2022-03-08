import * as React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>NOTES APP</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
