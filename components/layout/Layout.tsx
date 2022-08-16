import React, { ReactNode } from "react";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import { Container, Divider } from "@mui/material";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      <Container
        sx={{ marginBottom: "20px" }}
        className="principal-container"
        maxWidth="md"
      >
        {children}
      </Container>
      <Divider />
      <Footer />
    </div>
  );
};

export default Layout;
