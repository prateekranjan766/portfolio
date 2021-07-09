import React from 'react';
import '../styles/LandingSection.scss';

const LandingSection = () => {
  return (
    <div className='landing-section' id='landing-section'>
      <div className='landing-section__text'>
        <p>
          Hello, I'm{' '}
          <span className='landing-section__text--name'>Prateek Ranjan</span>.
          <br />
          I'm a full-stack web developer.
        </p>
        <a href='#about-section' className='landing-section__button'>
          View my work <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </div>
  );
};

export default LandingSection;
