import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="fs-1">
      <Row>
        <Col>Bye Bye</Col>
        <Col>World</Col>
      </Row>
    </Container>
  );
}

export default App;
