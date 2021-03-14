import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from './shared/Navbar';
import Footer from "./shared/Footer";

const Layout = ({ children }) => (
    <div className={"top-layout"}>
        <Navbar />
        <Container maxWidth="lg">
            <div className="main-container container">
                {children}
            </div>
        </Container>
        <Footer />
    </div>
)

export default Layout;