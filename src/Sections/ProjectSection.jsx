import React from 'react';
import Project from '../Components/Project';
import { Fade } from 'react-reveal';
import '../styles/ProjectSection.scss';
const ProjectSection = () => {
  const projects = [
    {
      name: 'BookIt',
      image: '/images/bookIt.png',
      techStack: 'MongoDB / Express / Node / React',
      url: 'https://appbookit.herokuapp.com/',
      repository: 'https://github.com/prateekranjan766/BookIt',
      description:
        'An eCommerce platform built with React, Redux, Node, Express and MongoDB for selling books.',
    },
    {
      name: 'Blog-App',
      image: '/images/blog.png',
      techStack: 'MongoDB / Express / Node / React',
      url: 'https://blog-web-ap.herokuapp.com/login',
      repository: 'https://github.com/prateekranjan766/Blog-App',
      description:
        'A full stack CRUD application built with React, Node, Express and MongoDB.',
    },
    {
      name: 'CryptoCurrency-Tracker',
      image: '/images/crypto.png',
      techStack: 'React',
      url: 'https://cryptocurrency-track.web.app/',
      repository: 'https://github.com/prateekranjan766/cryptocurrency-tracker',
      description:
        'A web application built with React which provides a fundamental analysis of the crypto market. It shows various details about all the crypto-currencies with the help of a third party API.',
    },
    {
      name: 'Music Player',
      image: '/images/music-player.png',
      techStack: 'React',
      url: 'https://music-player-3d447.web.app/',
      repository: 'https://github.com/prateekranjan766/MusicPlayer',
      description: 'A simple music player application created using react.',
    },
  ];
  return (
    <section className='project-section' id='projects-section'>
      <Fade right>
        <h1 className='section__heading'>Projects</h1>
      </Fade>

      <div className='container'>
        <div className='projects__container'>
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
