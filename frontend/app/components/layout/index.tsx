import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavbarComponent } from "../modules/navbar";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <Container>{children}</Container>
    </>
  );
};
