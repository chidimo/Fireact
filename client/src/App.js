import React, { Fragment } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.scss";
import { Messaging } from "./Messaging";

const App = () => {
  return (
    <Fragment>
      <ToastContainer
        autoClose={2000}
        position="top-center"
      />
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Firebase messaging with React</Navbar.Brand>
      </Navbar>

      <Container className="center-column">
        <Row>
          <Col>
              <Messaging />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default App;
