import React from "react";
import Container from 'react-bootstrap/Container';

export default function Footer() {
    return(
        <Container fluid>
            <div className="row text-center" style={{ backgroundColor: "", color: "", padding: "1rem" }}>
                <div>
                    <a style={{ backgroundColor: "", color: "", padding: "5px", rel="",}} 
                    href="480.269.2432" target="_blank" >
                        <i className="bi bi-telephone fa-fw fa-2x"></i>
                    </a>
                    <a style={{ backgroundColor: "", color: "", padding: "5px", rel="",}} 
                    href="emsthai21@gmail.com" target="_blank" >
                        <i className="bi bi-envelope"></i>
                    </a>
                    <a style={{ backgroundColor: "", color: "", padding: "5px", rel="",}} 
                    href="https://github.com/geneskit" target="_blank" >
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </Container>
    )
}