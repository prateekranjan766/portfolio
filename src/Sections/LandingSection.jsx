import React from 'react';
import { Link } from 'react-scroll';
import bgVideo from '../bgVideo.mp4';
import '../styles/LandingSection.scss';

const LandingSection = () => {
  return (
    <div className='landing-section' id='landing-section'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src={bgVideo} type='video/mp4'></source>
        </video>
      </div>
      <div className='landing-section__text'>
        <p>
          Hello, I'm{' '}
          <span className='landing-section__text--name'>Prateek Ranjan</span>.
          <br />
          I'm a full-stack web developer.
        </p>
        <Link
          to='about-section'
          className='landing-section__button'
          smooth={true}
          duration={800}
        >
          View my work <i className='fas fa-arrow-right'></i>
        </Link>
      </div>
    </div>
  );
};

export default LandingSection;
