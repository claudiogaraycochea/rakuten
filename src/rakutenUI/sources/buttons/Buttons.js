import React from "react";
import './Buttons.css';

export const Button = (props) => {
  const {
    className,
    size,
    backgroundImage,
    alignItems,
    justifyContent,
    onPress,
  } = props;
  const styles = {
    height: (size) ? `calc(${size}% - 0px)` : null,
    backgroundImage: `url(${backgroundImage})`,
    alignItems: (alignItems) ? `${alignItems}` : null,
    flex: 1,
    justifyContent: (justifyContent) ? `${justifyContent}` : null,
  }
  return (
    <button
      className={`btn ${className}`}
      onClick={onPress}
    >
      {props.children}
    </button>
  );
};
