import React from 'react';
import Hero from '../components/Hero';
import Container from "../components/Container";
import Row from '../components/Row';
import Col from "../components/Col";
import "./style.css"

function Gallery() {
    return (
        <div>
          <Hero backgroundImage="http://localhost:3000/me-lochness-01.jpg">
            <h1>Sam Brooke</h1>
            <h2>Front-End Web Developer</h2>
          </Hero>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <h1>Welcome to my portfolio!</h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <h3>
                  A little bit about me...
                </h3>
                <p>
                  My interests
      
                </p>
                <h3>
                  My Experience...
                </h3>
                <p>
                  <ul>CSS</ul>
                  <ul>Bootstrap</ul>
                  <ul>HTML</ul>
                  <ul>Javascript</ul>
                  <ul>JQuery</ul>
                  <ul>Node JS</ul>
                  <ul>and now React!</ul>
      
                </p>
    <button>My GitHub</button> <button>My LinkedIn</button>
    <button>My Resume</button>
    <button>Call Me</button>
    <button>Email Me</button>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }


export default Gallery;