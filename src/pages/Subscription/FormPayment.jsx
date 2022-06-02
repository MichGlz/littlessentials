import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function FormPayment() {
  return (
    <Container className="col col-sm-8 col-md-6">
      <Form>
        <Form.Group className="mb-3" controlId="formCC">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="number" placeholder="0000 0000 0000 0000" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name on card</Form.Label>
          <Form.Control type="text" placeholder="Marie Luarsen" />
        </Form.Group>

        <Container className="d-flex justify-content-between">
          <Form.Group className="mb-3 col-4 " controlId="formEDate">
            <Form.Label>Expire date</Form.Label>
            <Form.Control type="text" placeholder="mm/yy" />
          </Form.Group>

          <Form.Group className="mb-3 col-4 col-md-3 " controlId="formCVV">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="text" placeholder="000" />
          </Form.Group>
        </Container>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I'm agree with the terms and conditions" />
        </Form.Group>
      </Form>
    </Container>
  );
}
