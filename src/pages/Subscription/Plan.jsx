import React from "react";
import { Container, Row, Button, Col, Spinner, Card } from "react-bootstrap";

export default function Plan(props) {
  const plan = props.plan.name;
  const productList = props.plan.products.map((product, i) => <li key={plan + "pr" + i}>{product}</li>);

  return (
    <Col>
      <Card className={`gap-1 rounded-3 border border-2`}>
        <Card.Header as="h5" className={`text-center ${props.plan.bestValue ? "bg-info" : " bg-white border-white text-white"}`}>
          BEST VALUE
        </Card.Header>
        <Card.Body className="gap-3">
          <Card.Title className="text-center fs-3">{props.plan.name}</Card.Title>
          <Card.Subtitle className="text-center fs-5">{props.plan.period}</Card.Subtitle>
          <Container className="d-flex justify-content-between border-bottom mt-3">
            <p className="fs-4">{props.plan.items} items</p>
            <p className="fs-4 fw-bolder">{props.plan.price} kr</p>
          </Container>
          <>
            <h5 className="mt-4">What’s included?</h5>
            <ul>{productList}</ul>
          </>
          {/* <Button
            variant="white"
            className={`w-100 border-dark mt-3 ${props.selectedPlan === props.no ? "btn-sun" : ""}`}
            onClick={() => {
              props.setSelectedPlan(props.no);
            }}
          >
            {props.plan.btnLabel}
          </Button> */}
        </Card.Body>
      </Card>
    </Col>
  );
}