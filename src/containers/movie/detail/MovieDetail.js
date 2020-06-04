import React, { Component } from "react";
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
import ReactPlayer from 'react-player'
// https://prod-kami.wuaki.tv/v1/delivery/dash/stpeter/6e403063-7091-45c4-8ec1-f83e6b446226.mpd

class MovieDetail extends Component {
  constructor(props) {
		super(props);
		this.state = {
      showTrailer: false,
		};
		this.handlePlayTrailer = this.handlePlayTrailer.bind(this);
  }

  handlePlayTrailer = () => {
    console.log('playTrailer');
    this.setState({
      showTrailer: !this.state.showTrailer
    });
  }

  render() {
    const { showTrailer } = this.state;
    if (showTrailer) {
      console.log('showTrailer: ', true);
      return (
        <Container>
          <Section
            size={100}
            backgroundImage={imagesUI.IMAGE_MOCK_MOVIE}
            justifyContent={'flex-end'}
          >
            <ReactPlayer 
              url='https://prod-kami.wuaki.tv/v1/delivery/dash/stpeter/6e403063-7091-45c4-8ec1-f83e6b446226.mpd'
              playing
              className='video-fullscreen'
            />
            <Button 
              className={'btn-video-stop'}
              onPress={()=>this.handlePlayTrailer()}
            >
              Stop
            </Button>
          </Section>
        </Container>
      )
    }
    return (
      <Container>
        <Section
          size={100}
          backgroundImage={imagesUI.IMAGE_MOCK_MOVIE}
          justifyContent={'flex-end'}
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
              <Col
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Button
                  className={'btn-primary lg'}
                >
                  WATCH MOVIE
                </Button>
                <Button
                  className={'btn-secondary lg'}
                  onPress={()=>this.handlePlayTrailer()}
                >
                  VIEW TRAILER
                </Button>
              </Col>
            </Row>
          </Box>
          <Row>
            <Col>
            </Col>
          </Row>
        </Section>
        <Section
          size={40}
        >
          More content
        </Section>  
      </Container>
    );    
  }
};

export default MovieDetail;