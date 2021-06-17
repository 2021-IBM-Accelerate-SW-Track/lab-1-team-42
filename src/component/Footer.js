import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center py-3 small">
          * Click on the task title to mark as complete
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
