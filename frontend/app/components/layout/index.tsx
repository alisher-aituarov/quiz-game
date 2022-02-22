import { FC } from "react";
import { Container } from "../container";
import { NavbarComponent } from "../modules/navbar";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <Container>{children}</Container>
    </>
  );
};
