import React from "react";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/Layout/UI/Input/Input";
import "./signin.css";

function Signin() {
  return (
    <Layout>
      <Container>
        <Row className="row">
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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

export default Signin;
