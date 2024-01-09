import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function MyFooter() {
  return (
    <Container fluid className="  p-5 bg-secondary text-white">
      <Row>
        <Col className=" d-flex justify-content-center ">
          <div>CIAO SONO UN FOOTER</div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
