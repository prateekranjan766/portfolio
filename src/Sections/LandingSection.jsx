import React from 'react';
import background from '../background-photo.png';
import '../styles/LandingSection.scss';

const LandingSection = () => {
  return (
    <div className='landing-section'>
      <div className='landing-section__text'>
        <p>
          Hello, I'm{' '}
          <span className='landing-section__text--name'>Prateek Ranjan</span>.
          <br />
          I'm a full-stack web developer.
        </p>
        <button className='landing-section__button'>
          View my work <i className='fas fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
};

export default LandingSection;
