import React, { useRef, useState, useEffect } from 'react';
import Message from './message';
import Button from '../Button';
import './style.scss';

const Footer = () => {
  const [messageCollect, updateMessageCollect] = useState([
    {
      name: 'Guestbook User',
      subject: 'aaaaa',
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: '2020-11-09 8:26:42',
    },
  ]);
  const name = useRef();
  const subject = useRef();
  const message = useRef();

  const saveMessage = () => {
    if (getValidation()) {
      let nameValue = name.current.value;
      let subjectValue = subject.current.value;
      let messageValue = message.current.value;
      updateMessageCollect([
        ...messageCollect,
        {
          name: nameValue,
          subject: subjectValue,
          message: messageValue,
          date: getDate(),
        },
      ]);
      clearForm();
    }
  };

  const getValidation = () => {
    let nameValue = name.current.value;
    let subjectValue = subject.current.value;
    let messageValue = message.current.value;
    if (nameValue === '' || subjectValue === '' || messageValue === '') {
      if (nameValue === '') {
        name.current.classList.add('danger');
      } else {
        name.current.classList.remove('danger');
      }
      if (subjectValue === '') {
        subject.current.classList.add('danger');
      } else {
        subject.current.classList.remove('danger');
      }
      if (messageValue === '') {
        message.current.classList.add('danger');
      } else {
        message.current.classList.remove('danger');
      }
      return false;
    } else {
      name.current.classList.remove('danger');
      subject.current.classList.remove('danger');
      message.current.classList.remove('danger');
      return true;
    }
  };

  const clearForm = () => {
    name.current.value = '';
    subject.current.value = '';
    message.current.value = '';
  };

  const getDate = () => {
    const today = new Date();

    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();

    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    const dateTime = date + ' ' + time;

    return dateTime;
  };
  return (
    <footer>
      <h2>Guestbook</h2>
      <div className='guestbook'>
        <form>
          <input type='text' placeholder='Name' ref={name} />
          <input type='text' placeholder='Subject' ref={subject} />
          <textarea placeholder='Message' rows='8' ref={message} />
          <Button
            buttonType='greenBlack'
            name='Send'
            shadow={true}
            click={() => saveMessage()}
          />
        </form>
        <div className='record'>
          <div className='recordWrapper'>
            {messageCollect.map((m, index) => (
              <Message
                key={index}
                name={m.name}
                subject={m.subject}
                message={m.message}
                date={m.date}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='nav'>
        <p>©2012, Pragmanila Solutions Incorporated</p>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
