import React from 'react';
import './style.scss';

const Button = (props) => {
  const { buttonType, name, shadow, click } = props;

  return shadow == true ? (
    <button
      className={`btn shadow ${buttonType}`}
      type='button'
      onClick={click}
    >
      {name}
    </button>
  ) : (
    <button className={`btn ${buttonType}`} type='button' onClick={click}>
      {name}
    </button>
  );
};

export default Button;
