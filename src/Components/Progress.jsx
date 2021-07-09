import React from 'react';
import '../styles/Progress.scss';
const Progress = ({ skill, value }) => {
  return (
    <div className='progress'>
      <div className='progress__key'>{skill}</div>
      <div className='progress__value'>
        <div
          style={{
            backgroundColor: '#01A1A7',
            width: `${value}%`,
            height: '100%',
          }}
        ></div>
        <span className='progress__value--text'>{value}%</span>
      </div>
    </div>
  );
};

export default Progress;
