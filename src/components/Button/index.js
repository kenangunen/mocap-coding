import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  buttonType: PropTypes.string,
  name: PropTypes.string,
  shadow: PropTypes.bool,
  click: PropTypes.func,
};

export default Button;
