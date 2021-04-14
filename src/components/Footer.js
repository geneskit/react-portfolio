import React from "react";
import Container from 'react-bootstrap/Container';

export default function Footer() {
    return(
        <Container fluid>
            <div className="row text-center" style={{ backgroundColor: "#3C3D35", color: "#F7F6EF", padding: "1rem" }}>
                <div>
                    <a style={{ backgroundColor: "#3C3D35", color: "#9C9A98", padding: "5px",}} 
                    href="480.269.2432" target="_blank" >
                        <i className="bi bi-telephone fa-fw fa-2x"></i>
                    </a>
                    <a style={{ backgroundColor: "#3C3D35", color: "#9C9A98", padding: "5px",}} 
                    href="emsthai21@gmail.com" target="_blank" >
                        <i className="bi bi-envelope"></i>
                    </a>
                    <a style={{ backgroundColor: "#3C3D35", color: "#9C9A98", padding: "5px",}} 
                    href="https://github.com/geneskit" target="_blank" >
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </Container>
    )
}
