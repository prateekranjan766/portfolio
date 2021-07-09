import React from 'react';
import '../styles/ContactSection.scss';

const ContactSection = () => {
  return (
    <section className='contact__section' id='contact-section'>
      <p
        className='section__heading'
        style={{ color: '#fff', paddingBottom: '7rem' }}
      >
        Contact
      </p>
      <p style={{ color: '#05c2c9', fontSize: '2.5rem' }}>
        Interested in working together?
        <br /> We should queue up a chat. I’ll buy the coffee.
      </p>
      <div className='contact__pages'>
        <a
          href='https://www.facebook.com/prateek.ranjan.52/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-facebook-f'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/prateek-ranjan-927720192/'
          rel='noreferrer'
          target='_blank'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a
          href='https://www.instagram.com/i_m_prateekranjan/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-instagram'></i>
        </a>
        <a
          href='mailto:prateekranjan766@gmail.com'
          rel='noreferrer'
          target='_blank'
        >
          <i className='far fa-envelope'></i>
        </a>
      </div>
      <p>Handcrafted by me &copy; 2021</p>
    </section>
  );
};

export default ContactSection;
