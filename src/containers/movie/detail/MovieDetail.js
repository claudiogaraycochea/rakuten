import React from "react";
import {
  Button,
  Container,
  Section,
  Row,
  Col,
  Box,
  Score,
  imagesUI,
} from '../../../rakutenUI/RakutenUI';

const MovieDetail = () => {
  return (
    <Container>
      <Section
        size={100}
        backgroundImage={imagesUI.IMAGE_MOCK_MOVIE}
        alignItems={'flex-end'}
        justifyContent={'center'}
      >
        <Box
          className={'margin-bottom-2'}
        >
          <Row>
            <Col
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Score value='6.8'/>
            </Col>
          </Row>
          <Row>
            <Col
              alignItems={'center'}
              justifyContent={'center'}
            >
              <h1>Dolittle</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className={'btn-primary lg'}
              >
                WATCH MOVIE
              </Button>
            </Col>
            <Col>
              <Button
                className={'btn-secondary lg'}
              >
                VIEW TRAILER
              </Button>
            </Col>
          </Row>
        </Box>
      </Section>
      <Section
        size={40}
      >
        More content
      </Section>  
    </Container>
  );
};

export default MovieDetail;