import React, { Component }from "react";
import Hero from '../../components/hero/Hero';
import { Container, Row, Col, ArtWork } from '../../rakutenUI/RakutenUI';
import './Home.css';

class Home extends Component {
  render() {
    const { fullData } = this.props;
    return (
      <Container>
        <Hero/>
        <div>
          {fullData.data.lists.map((list) => {
            return (
              <div key={list.id}>
                <Row>
                  <Col>
                    <h3>{list.name}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className='artwork-list'>
                      {list.contents.data.map((movie) => {
                        return (<ArtWork key={movie.id} movie={movie} to={'/movie'}/>)
                        /*return (
                          <div className='artwork-item' key={movie.id}>
                            <Link to={`/movie`}>
                              <img src={movie.images.artwork} />
                            </Link>
                          </div>
                        )*/
                      })}
                    </div>
                  </Col>
                </Row>
              </div>
            )
          })}
        </div>
      </Container>
    );
  }

};

export default Home;