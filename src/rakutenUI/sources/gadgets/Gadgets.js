import React from "react";
import './Gadgets.css';

export const Score = (props) => {
  const { value } = props;
  return (
    <div
      className='score-wrapper'
    >
      <i className='icon-score'/> <span>{value}</span>
    </div>
  );
};
