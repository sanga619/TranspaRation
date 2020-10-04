import React from "react";
import { Card, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
// import "./Login.css";

const schema = Yup.object({
  email: Yup.string().email().required("Email is Required"),
  password: Yup.string()
    .required("Password")
    .min(8, "Must be 8 or more character")
    .max(20, "Must be less than 20 character"),
});

const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>Login</Card.Header>
            <Card.Body>
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  email: "",
                  password: "",
                }}
              >
                {({ handleSubmit, handleChange, touched, values, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={4}>
                        Email
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isValid={touched.email && !!errors.email}
                          isInvalid={!!errors.email}
                          placeholder="Email"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                      <Form.Label column sm={4}>
                        Password
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          aria-describedby="passwordHelpBlock"
                          isValid={touched.password && !errors.password}
                          //   isInvalid={!!errors.password}
                          isInvalid={errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                        <Form.Text id="passwordHelpBlock" muted>
                          Must be 8-20 characters long.
                        </Form.Text>
                      </Col>
                    </Form.Group>
                    <Row className="d-flex justify-content-center">
                      <Button type="submit">Submit form</Button>
                    </Row>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
