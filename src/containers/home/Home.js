import React from "react";
import Hero from '../../components/hero/Hero';
import fullData from '../../store/default.json';
import artworkImage from '../../assets/images/thumbnail.jpeg';
import './Home.css';

const Home = () => {
  console.log('fullData:', fullData);
  return (
    <div>
      <Hero/>
      <div>
        {fullData.data.lists.map((list) => {
          return (
            <div className='row'>
              <div className='col'>
                <div>
                  <h3>{list.name}</h3>
                </div>
                <div className='artwork-list'>
                  {list.contents.data.map((movie) => {
                    console.log('data movie: ', movie);
                    return (
                      <div className='artwork-item'>
                        <img src={artworkImage} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Home;