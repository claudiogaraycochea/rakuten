import React from "react";
import './ArtWork.css';
import { Link } from 'react-router-dom';

export const ArtWork = (props) => {
  const { movie, to } = props;
  return (
    <div className='artwork-item' key={movie.id}>
      <Link to={`/movie`}>
        <img src={movie.images.artwork} />
      </Link>
    </div>
  );
};