import React from "react";
import './Containers.css';

export const Container = (props) => {
  return (
    <div
      className='container'
    >
      {props.children}
    </div>
  );
};

export const Section = (props) => {
  const {
    size,
    className,
    backgroundImage,
    alignItems,
    justifyContent,
  } = props;
  const styles = {
    height: (size) ? `${size}%` : null,
    backgroundImage: `url(${backgroundImage})`,
    alignItems: (alignItems) ? `${alignItems}` : null,
    flex: 1,
    justifyContent: (justifyContent) ? `${justifyContent}` : null,
  }
  return (
    <div
      className={`section ${className}`}
      style={styles}
    >
      {props.children}
    </div>
  );
};

export const Row = (props) => {
  return (
    <div
      className='row'
    >
      {props.children}
    </div>
  );
};

export const Col = (props) => {
  const {
    size,
    backgroundImage,
    alignItems,
    justifyContent,
  } = props;
  const styles = {
    height: (size) ? `${size}%` : null,
    backgroundImage: `url(${backgroundImage})`,
    alignItems: (alignItems) ? `${alignItems}` : null,
    flex: 1,
    justifyContent: (justifyContent) ? `${justifyContent}` : null,
  }
  return (
    <div
      className='col'
      style={styles}
    >
      {props.children}
    </div>
  );
};

export const Box = (props) => {
  const {
    size,
    className,
    backgroundImage,
    alignItems,
    justifyContent,
  } = props;
  const styles = {
    height: (size) ? `calc(${size}% - 0px)` : null,
    backgroundImage: `url(${backgroundImage})`,
    alignItems: (alignItems) ? `${alignItems}` : null,
    flex: 1,
    justifyContent: (justifyContent) ? `${justifyContent}` : null,
  }
  return (
    <div
      className={`box ${className}`}
    >
      {props.children}
    </div>
  );
};
