import Link from "next/link";
import { FC } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const NavbarComponent: FC = () => {
  const auth = false;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">QUIZ-BATTLES</Navbar.Brand>
        {auth ? (
          <NavDropdown
            title="Dropdown"
            id="collasible-nav-dropdown"
            color="red"
          >
            <NavDropdown.Item href="#">My statistics</NavDropdown.Item>
            <NavDropdown.Item href="#">Global statistics</NavDropdown.Item>
            <NavDropdown.Item href="#"></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Log out</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Nav>
            <div>
              <Link href="/sign-in">
                <Button variant="outline-primary" size="sm">
                  SIGN IN
                </Button>
              </Link>{" "}
              <Link href="/sign-up">
                <Button variant="primary">SIGN UP</Button>
              </Link>{" "}
            </div>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};
