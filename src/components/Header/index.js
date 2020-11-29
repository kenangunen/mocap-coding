import React from 'react';
import './style.scss';
import TwitterIcon from '../../assets/svg/twitter';
import LinkedinIcon from '../../assets/svg/linkedin';
import InstagramIcon from '../../assets/svg/instagram';
import GooglePlusIcon from '../../assets/svg/googleplus';
import FacebookIcon from '../../assets/svg/facebook';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Segment</li>
          <li>Guestbook</li>
        </ul>
      </nav>
      <div className='socialMedia'>
        <div className='hexagon'>
          <div className='iconContainer'>
            <FacebookIcon />
          </div>
        </div>
        <div className='hexagon'>
          <div className='iconContainer'>
            <TwitterIcon />
          </div>
        </div>
        <div className='hexagon'>
          <div className='iconContainer'>
            <GooglePlusIcon />
          </div>
        </div>
        <div className='hexagon'>
          <div className='iconContainer'>
            <LinkedinIcon />
          </div>
        </div>
        <div className='hexagon'>
          <div className='iconContainer'>
            <InstagramIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
