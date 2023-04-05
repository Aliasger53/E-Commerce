import React from "react";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./signup.css";
import Input from "../../components/Layout/UI/Input/Input";

function Signup() {
  return (
    <Layout>
      <Container>
        <Row className="row">
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="Enter First Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>

                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Enter Last Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>

              <Input
                label="Email address"
                placeholder="Enter email address"
                value=""
                type="text"
                onChange={() => {}}
              />

              <Input
                label="Password"
                placeholder="Enter Password"
                value=""
                type="text"
                onChange={() => {}}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signup;
