import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const CardContainer = () => {
  return (
    <div className="text-center" style={{ backgroundColor: "#122240", color: "dark", padding: "15px" }} >
      <Container>
        <Row className="show-grid">
          <Col md={12}>
            <ProjectCards></ProjectCards>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
