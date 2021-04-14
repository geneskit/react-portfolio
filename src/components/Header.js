import React, { useState } from "react";
import Nav from '../components/Nav';
import About from "../components/About";
import Footer from "../components/Footer.js";

import Portfolio from "../components/Portfolio.js";
import Contact from "../components/Contact.js";
import Resume from "../components/Resume.js";

import Container from "react-bootstrap/Container";
import { render } from "react-dom";

const Header = () => {
    const curr = useState("About");
    const pageChange = useState("About");

    const render = () => {
        switch(curr) {
            case "About":
                return <About/>
            case "Portfolio":
                return <Portfolio/>
            case "Resume":
                return <Resume/>
            case "Contact":
                    return <Contact/>
            default:
                return <About/>           
        }
    }
    return(
        <Container fluid style={{ backgroundColor: "#3C3D35", color: "#F7F6EF", padding: "15px" }}>
            <div className="row my-5 text-center">
                <header>
                    <h1>Emily Thai</h1>
                    <Nav currentPage={curr} handlePageChange={pageChange}></Nav>
                </header>
            </div>
            <main>
                <div>
                    {render(curr)}
                </div>
            </main>
            <Footer></Footer>
        </Container>
    )
};

export default Header;