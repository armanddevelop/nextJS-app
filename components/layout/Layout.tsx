import React, { ReactNode } from "react";
import NavBar from "@components/NavBar";
import { Container } from "@mui/material";
//import styles from "./Layout.module.css";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      <Container maxWidth="sm">
        {children}
        <footer className="container">This is the footer</footer>
      </Container>
    </div>
  );
};

export default Layout;
