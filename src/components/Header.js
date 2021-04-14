import React, { useState } from "react";
import Nav from "../Nav.js";
import About from "../About.js";
import Portfolio from "../Portfolio.js";
import Contact from "../Contact.js";
import Resume from "../Resume.js";
import Footer from "../Footer.js";

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
}
return(
    <Container fluid style={{ backgroundColor: "#122240", color: "#be8180", padding: "15px" }}>
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