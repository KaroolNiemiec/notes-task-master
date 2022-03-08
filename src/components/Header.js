import * as React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>NOTES APP</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
