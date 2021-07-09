import React from 'react';
import Progress from '../Components/Progress';
import profilePic from '../profile2.jpg';
import Header from '../Components/Header';
import '../styles/AboutSection.scss';

const AboutSection = () => {
  const skills = [
    'C++',
    'C',
    'CSS',
    'HTML',
    'React',
    'Javascript',
    'NodeJS',
    'MongoDB',
  ];
  const values = [80, 70, 80, 55, 80, 70, 60, 60];
  const idx = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <Header />
      <div className='about-section' id='about-section'>
        <h1 className='section__heading'>About</h1>
        <div className='about-section__main'>
          <div className='about-section__main--profile'>
            <img
              src={profilePic}
              className='about-section__main--profile-pic'
              alt='Profile pic'
            ></img>
            <div className='about-section__main--profile-details'>
              <h2>Who's this guy?</h2>
              <p>
                I'm a full-stack developer who like to code things from scratch,
                and enjoy bringing ideas to life in the browser.
              </p>
            </div>
          </div>
          <div className='about-section__main--skills'>
            {idx.map((i) => (
              <Progress key={i} skill={skills[i]} value={values[i]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
