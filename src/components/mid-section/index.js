import React, { useRef } from 'react';
import CheckIcon from '../../assets/svg/check';
import Button from '../Button';
import Segment from './segment';
import './style.scss';

const MidSection = () => {
  const green = useRef();
  const gray = useRef();
  const orange = useRef();
  const greenArrow = useRef();
  const grayArrow = useRef();
  const orangeArrow = useRef();
  const selectSegment = (segment) => {
    if (segment === 'green') {
      greenArrow.current.classList.remove('displayNone');
      orangeArrow.current.classList.add('displayNone');
      grayArrow.current.classList.add('displayNone');
      green.current.classList.remove('passive');
      orange.current.classList.add('passive');
      gray.current.classList.add('passive');
    } else if (segment === 'gray') {
      greenArrow.current.classList.add('displayNone');
      orangeArrow.current.classList.add('displayNone');
      grayArrow.current.classList.remove('displayNone');
      gray.current.classList.remove('passive');
      orange.current.classList.add('passive');
      green.current.classList.add('passive');
    } else if (segment === 'orange') {
      greenArrow.current.classList.add('displayNone');
      orangeArrow.current.classList.remove('displayNone');
      grayArrow.current.classList.add('displayNone');
      orange.current.classList.remove('passive');
      green.current.classList.add('passive');
      gray.current.classList.add('passive');
    }
  };
  return (
    <section className='midSection'>
      <h2>Segment</h2>
      <div className='sectionWrapper'>
        <div className='segmentContainer'>
          <Segment
            color='Green'
            text='Section below should have more emphasis on hover, list below can be higlighted individually as well.'
          />
          <div
            className='segmentContent green'
            ref={green}
            onClick={() => {
              selectSegment('green');
            }}
          >
            <div className='arrow' ref={greenArrow}></div>
            <ul>
              <li>
                <CheckIcon /> Web Design
              </li>
              <li>
                <CheckIcon /> UI Design
              </li>
              <li>
                <CheckIcon /> Graphic Design
              </li>
              <li>
                <CheckIcon /> Branding
              </li>
              <li>
                <CheckIcon /> Corporate Identity
              </li>
              <li>
                <CheckIcon /> Mobile App Design
              </li>
              <li>
                <CheckIcon /> Poster Design
              </li>
            </ul>
            <Button buttonType='greenBlack' name='Button' shadow={false} />
          </div>
        </div>
        <div className='segmentContainer'>
          <Segment
            color='Gray'
            text='Text below should have less emphasis until hovered.'
          />
          <div
            className='segmentContent gray passive'
            ref={gray}
            onClick={() => {
              selectSegment('gray');
            }}
          >
            <div className='arrow displayNone' ref={grayArrow}></div>
            <ul>
              <li>
                <CheckIcon /> Markeing Title
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </li>
              <li>
                <CheckIcon /> Marketing Title
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </li>
              <li>
                <CheckIcon /> Marketing Title
                <p>
                  It is a long established fact that a reader will be distracted
                  by.
                </p>
              </li>
            </ul>
            <Button buttonType='grayWhite' name='Button' shadow={false} />
          </div>
        </div>
        <div className='segmentContainer'>
          <Segment
            color='Orange'
            text='Duis aute irure dolor in reprehendrit in voluptate velit esse cillium dolore eu fugiat nulla pariatur.'
          />
          <div
            className='segmentContent orange passive'
            ref={orange}
            onClick={() => {
              selectSegment('orange');
            }}
          >
            <div className='arrow displayNone' ref={orangeArrow}></div>
            <ul>
              <li>
                <CheckIcon /> Markeing Title
              </li>
              <li>
                <CheckIcon /> Marketing Title
              </li>
            </ul>
            <Button buttonType='orangeBlack' name='Button' shadow={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidSection;

{
  /* <Segment
          color='Gray'
          text='Text below should have less emphasis until hovered.'
        />
        <Segment
          color='Orange'
          text='Duis aute irure dolor in reprehendrit in voluptate velit esse cillium dolore eu fugiat nulla pariatur.'
        /> */
}
