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

class MovieDetail extends Component {
  constructor(props) {
		super(props);
		this.state = {
      showTrailer: false,
		};
		this.handlePlayTrailer = this.handlePlayTrailer.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { movie_id } = this.props.match.params;
    this.props.getMovie(movie_id);
  }

  handlePlayTrailer = () => {
    this.setState({
      showTrailer: !this.state.showTrailer
    });
  }

  render() {
    const { showTrailer } = this.state;
    const { movieData } = this.props;
    
    if (showTrailer) {
      if (movieData.data) {
        const { stream_infos } = movieData.data;
        const movieURL = stream_infos[0].url;
        return (
          <Container>
            <Section
              size={100}
              backgroundImage={imagesUI.IMAGE_MOCK_MOVIE}
              justifyContent={'flex-end'}
            >
              <ReactPlayer 
                url={movieURL} 
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