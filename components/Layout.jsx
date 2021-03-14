import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from './shared/Navbar';
import Footer from "./shared/Footer";

const Layout = ({ children }) => (
    <div className={"top-layout"}>
        <Navbar />
        <Container maxWidth={"lg"} className={"main-container container"}>
            {children}
        </Container>
        <Footer />
    </div>
)

export default Layout;