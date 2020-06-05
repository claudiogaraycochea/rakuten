import React, { Component }from "react";
import { Container } from '../../rakutenUI/RakutenUI';
import Hero from '../../components/hero/Hero';
import MovieList from '../../components/movie/moviesList/MoviesList';
import './Home.css';

class Home extends Component {
  render() {
    const { fullData } = this.props;
    return (
      <Container>
        <Hero/>
        <div>
          {fullData.data.lists.map((list) => {
            return (<MovieList key={list.id} list={list}/>)
          })}
        </div>
      </Container>
    );
  }

};

export default Home;