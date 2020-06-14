import React from "react";
import PropTypes from 'prop-types';
import './Containers.css';

export const Container = (props) => {
  const { children } = props;
  return (
    <div
      className='container'
    >
      {children}
    </div>
  );
};

export const Section = (props) => {
  const {
    height,
    className,
    backgroundImage,
    alignItems,
    justifyContent,
    children,
  } = props;
  const styles = {
    height: (height) ? `${height}%` : null,
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
      {children}
    </div>
  );
};

export const Row = (props) => {
  const { children } = props;
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
    height,
    backgroundImage,
    alignItems,
    justifyContent,
    children,
  } = props;
  const styles = {
    height: (height) ? `${height}%` : null,
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
      {children}
    </div>
  );
};

export const Box = (props) => {
  const {
    width,
    height,
    className,
    backgroundImage,
    alignItems,
    justifyContent,
    children,
  } = props;
  const styles = {
    width: (width) ? `${width}%` : '',
    height: (height) ? `calc(${height}% - 0px)` : null,
    backgroundImage: `url(${backgroundImage})`,
    alignItems: (alignItems) ? `${alignItems}` : null,
    justifyContent: (justifyContent) ? `${justifyContent}` : null,
  }
  return (
    <div
      className={`box ${className}`}
      style={styles}
    >
      {children}
    </div>
  );
};