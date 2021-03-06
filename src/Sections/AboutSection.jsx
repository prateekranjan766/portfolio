import React from 'react';
import Progress from '../Components/Progress';
import profilePic from '../profile2.jpg';
import Header from '../Components/Header';
import Fade from 'react-reveal';
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
  const values = [80, 70, 80, 60, 80, 65, 60, 60];
  const idx = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <Header />
      <section className='about-section' id='about-section'>
        <Fade top>
          <h1 className='section__heading'>About</h1>
        </Fade>
        <div className='about-section__main'>
          <Fade left>
            <div className='about-section__main--profile'>
              <img
                src={profilePic}
                className='about-section__main--profile-pic'
                alt='Profile pic'
              ></img>
              <div className='about-section__main--profile-details'>
                <h2>Who's this guy?</h2>
                <p>
                  I'm a full-stack developer who like to code things from
                  scratch, and enjoy bringing ideas to life in the browser.
                </p>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className='about-section__main--skills'>
              {idx.map((i) => (
                <Progress key={i} skill={skills[i]} value={values[i]} />
              ))}
            </div>
          </Fade>
        </div>
        <div className='coding'>
          <p>Coding Profiles :</p>
          <div className='coding__profile'>
            <a
              href='https://leetcode.com/PrateekRanjan/'
              className='coding__profile--item'
            >
              Leetcode
            </a>
            <a
              href='https://auth.geeksforgeeks.org/user/prateekranjan766/practice/'
              className='coding__profile--item'
            >
              GFG
            </a>
            <a
              href='https://www.hackerrank.com/prateekranjan766'
              className='coding__profile--item'
            >
              HackerRank
            </a>
            <a
              href='https://www.codechef.com/users/prateek_ranjan'
              className='coding__profile--item'
            >
              Codechef
            </a>
            <a
              href='https://codeforces.com/profile/prateek_ranjan'
              className='coding__profile--item'
            >
              Codeforces
            </a>
            <a
              href='https://www.hackerearth.com/@prateek973'
              className='coding__profile--item'
            >
              HackerEarth
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
