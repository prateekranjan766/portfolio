import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className='header-section'>
      <Link
        className='header-section__link'
        to='landing-section'
        smooth={true}
        duration={800}
      >
        HOME
      </Link>
      <Link
        activeClass='active'
        spy={true}
        className='header-section__link'
        to='about-section'
        smooth={true}
        duration={800}
      >
        ABOUT
      </Link>
      <Link
        activeClass='active'
        spy={true}
        className='header-section__link'
        to='projects-section'
        smooth={true}
        duration={800}
      >
        PROJECTS
      </Link>
      <Link
        activeClass='active'
        spy={true}
        className='header-section__link'
        to='contact-section'
        smooth={true}
        duration={800}
      >
        CONTACT
      </Link>
    </div>
  );
};

export default Header;
