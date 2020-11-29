import React, { useState, useEffect } from 'react';
import './style.scss';

const Message = (props) => {
  // const [messageCollect, updateMessageCollect] = useState([]);
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

export default Message;
