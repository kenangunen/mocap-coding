import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { name, subject, message, date } = props;

  return (
    <div className='messageWrapper'>
      <div className='messageHeader'>
        <span className='userNamer'>{name}</span>
        <span className='date'>{date}</span>
      </div>
      <div className='messageText'>
        <span>{subject}</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  name: PropTypes.string,
  subject: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
};

export default Message;
