import type { ReactElement } from "react";
import { Button, Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Layout } from "../app/components/layout";

const SignUpPage: NextPageWithLayout = () => {
  return (
    <Container fluid={"md"}>
      <Row className="justify-content-center my-5">
        <Col lg="4">
          <div className="shadow p-3 rounded">
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Group className="mb-3" as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="nickname">
                <Form.Label>Nickname</Form.Label>
                <Form.Control placeholder="Sheldon" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control placeholder="Estonia" />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="age">
                  <Form.Label>Age</Form.Label>
                  <Form.Select defaultValue="23">
                    <option>24</option>
                    <option>25</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="sex">
                  <Form.Label>Sex</Form.Label>
                  <Form.Select defaultValue="Male">
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                as={Col}
                controlId="confirm-password"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SignUpPage;
