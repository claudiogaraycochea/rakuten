import React from "react";
import {
  Container,
  Section,
  Box,
  Row,
  Col,
  Button,
  imagesUI,
} from './../RakutenUI';

const StyleGuide = () => {
  return (
    <Container>
      <Section
        size='100'
        justifyContent={'center'}
      >
        <Box>
          <Row>
            <Col
              alignItems={'center'}
              justifyContent={'center'}
            >
              <h1>Rakuten UI</h1>
            </Col>
          </Row>
          <Row>
            <Col alignItems={'center'} justifyContent={'center'}>
              <h2>Develop Fast, Consistently and Responsive at multiple platforms</h2>
            </Col>
          </Row>
          <Row>
            <Col alignItems={'center'} justifyContent={'center'}>
              <Box>
                <h3>Features:</h3>
                <ul>
                  <li>High scalability UI design</li>
                  <li>High consistency at source code (the team developer don't touch CSS, pretty source code and less visual errors)</li>
                  <li>Responsive for multiple devices</li>
                  <li>Support multiple browsers (mobile, tablet, desktop, smart tv, and others)</li>
                  <li>Fastest development (Copy and Paste)</li>
                  <li>List of icons (easy to include icons)</li>
                  <li>List of buttons</li>
                  <li>List of containers</li>
                  <li>List of containers</li>
                  <li>Easy to change new themes</li>
                </ul>
              </Box>
            </Col>
          </Row>
        </Box>
      </Section>
      <Section size='50'>
        <Row>
          <Col justifyContent={'center'}>
            <h2>Buttons</h2>
          </Col>
        </Row>
        <Row>
          <Col justifyContent={'center'}>
            <Button
              className={'btn-primary lg'}
            >
              btn-primary
            </Button>
            <Button
              className={'btn-secondary lg'}
            >
              btn-secondary
            </Button>
          </Col>
        </Row>
      </Section>
      <Section size='50'>
        <Row>
          <Col justifyContent={'center'}>
            <h2>Headers</h2>
          </Col>
        </Row>
        <Box>
          <Row>
            <Col>
              <h1>Header h1</h1>
            </Col>
            <Col>
              <h2>Header h2</h2>
            </Col>
            <Col>
              <h3>Header h3</h3>
            </Col>
          </Row>
          <Row>
            <Col justifyContent={'center'}>
              (Paragraph P) Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Col>
          </Row>
        </Box>
      </Section>
      <Section
        size='60'
        alignItems={'center'}
        justifyContent={'center'}
        backgroundImage={imagesUI.IMAGE_MOCK_MOVIE}
      >
        <Row>
          <Col justifyContent={'center'}>
            <h2>Containers</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Section>
              <Row>
                <Col>
                  <Box>
                    Section, Row, Col, Box
                  </Box>
                </Col>
              </Row>
            </Section>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col>
            Video player: https://github.com/CookPete/react-player
          </Col>
        </Row>
      </Section>
    </Container>
  );
};

export default StyleGuide;