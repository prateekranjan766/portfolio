import React, { useState } from 'react';
import '../styles/ProjectSection.scss';

const Project = ({ project }) => {
  const [showImage, setShowImage] = useState(true);
  return (
    <div
      className='projects__container--item'
      onMouseOver={() => setShowImage(false)}
      onMouseLeave={() => setShowImage(true)}
    >
      {showImage == true ? (
        <img src={project.image} className='project-image' />
      ) : (
        <div className='project-info'>
          <p className='project-info__name'>{project.name}</p>
          <p className='project-info__stack'>{project.techStack}</p>
          <p className='project-info__description'>{project.description}</p>
          <div className='project-btn-div'>
            <a href={project.url} target='_blank' className='project-btn'>
              Website
            </a>
            <a
              href={project.repository}
              target='_blank'
              className='project-btn'
            >
              Repository
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
