import React from "react";
import Hero from '../../components/hero/Hero';
import fullData from '../../store/default.json';
import { Container, imagesUI, Row, Col} from '../../rakutenUI/RakutenUI';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  console.log('fullData:', fullData);
  return (
    <Container>
      <Hero/>
      <div>
        {fullData.data.lists.map((list) => {
          return (
            <div>
              <Row>
                <Col>
                  <h3>{list.name}</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className='artwork-list'>
                    {list.contents.data.map((movie) => {
                      console.log('data movie: ', movie);
                      return (
                        <div className='artwork-item'>
                          <Link to='/movie'>
                            <img src={imagesUI.IMAGE_MOCK_ARTWORK} />
                          </Link>
                        </div>
                      )
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
};

export default Home;