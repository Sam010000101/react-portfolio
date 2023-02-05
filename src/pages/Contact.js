import React from 'react';
import Hero from '../components/Hero';
import Container from "../components/Container";
import Row from '../components/Row';
import Col from "../components/Col";
import Form from "../components/Form";
import "./style.css"

function Contact() {
    return (
        <div>
          <Hero backgroundImage="http://localhost:3000/me-lochness-01.jpg">
            <h1>Sam Brooke</h1>
            <h2>Front-End Web Developer</h2>
          </Hero>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <h1>Contact</h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
              <Form />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }


export default Contact;