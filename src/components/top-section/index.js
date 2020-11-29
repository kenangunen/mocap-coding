import React from 'react';
import LogoIcon from '../../assets/svg/logo';
import Button from '../Button';
import './style.scss';

const TopSection = () => {
  return (
    <section className='topSection'>
      <div className='logo'>
        <LogoIcon />
      </div>
      <div className='h2'>
        <h2>Pragmanila Solutions Markup</h2>
      </div>
      <div className='h1'>
        <h1>
          You Should Build This <br /> Simple,Logical, & Straightforward
        </h1>
      </div>
      <div className='h3'>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          aliquid accusamus nam vero ea unde nobis vitae hic iure debitis, eum
          quod a id molestias, consectetur provident dolorem reiciendis
          doloremque. Accusantium fugiat sed dolorem ad inventore totam
          assumenda, eum illo unde, saepe explicabo possimus! Consectetur
          officiis pariatur error facilis tempora, ab ullam, deleniti assumenda
          maiores, amet perspiciatis placeat non rerum? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Tenetur aliquid accusamus nam vero
          ea unde nobis vitae hic iure debitis, eum quod a id molestias,
          consectetur provident dolorem reiciendis doloremque. Accusantium
          fugiat sed dolorem ad inventore totam assumenda, eum illo unde, saepe
          explicabo possimus!
        </h3>
      </div>
      <Button buttonType='greenWhite' name='Learn More' shadow={true} />
      <div className='tringle'></div>
    </section>
  );
};

export default TopSection;
