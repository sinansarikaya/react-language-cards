import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Language from "./Language";
import { data } from "../helpers/data";

const Card = () => {
  return (
    <Container className="container rounded-4">
      <h1>Languages</h1>
      <Row className="g-3 justify-content-center">
        {data.map((item, i) => {
          return (
            <Col sm={6} md={4} lg={3} key={i}>
              <Language {...item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
