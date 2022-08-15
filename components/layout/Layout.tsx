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
      <Container maxWidth="md">{children}</Container>
      <footer className="container">This is the footer</footer>
    </div>
  );
};

export default Layout;
