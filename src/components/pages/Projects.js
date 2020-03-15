import React from 'react';
import Social from '../Social';
import Project from '../Project';
import cryptoStock from '../../assets/cryptoStock.png';
import myooz from '../../assets/myooz.png';
import scheduler from '../../assets/scheduler.png';
import weather from '../../assets/weather.png';
import directory from '../../assets/directory.png';
import quiz from '../../assets/quiz.png';

export default function Projects() {
  return (
    <div>
      <Project 
      deployedUrl='https://ryanscott906.github.io/Group-Project-1'
      repoUrl='https://github.com/ryanscott906/Group-Project-1'
      name='First Group Project'
      img={cryptoStock}>
      </Project>
      <Project 
      deployedUrl='https://blooming-reef-02390.herokuapp.com/'
      repoUrl='https://github.com/ryanscott906/Group-Project-2'
      name='Second Group Project'
      img={myooz}>
      </Project>
      <Project 
      deployedUrl='https://ryanscott906.github.io/Homework-6-Weather/'
      repoUrl='https://github.com/ryanscott906/Homework-6-Weather'
      name='Weather Forecast'
      img={weather}>
      </Project>
      <Project 
      deployedUrl='https://ryanscott906.github.io/Homework-5-Workday-Planner/'
      repoUrl='https://github.com/ryanscott906/Homework-5-Workday-Planner'
      name='Workday Scheduler'
      img={scheduler}>
      </Project>
      <Project 
      deployedUrl='https://secure-cove-81725.herokuapp.com'
      repoUrl='https://github.com/ryanscott906/homework-15-employee-directory'
      name='Employee Directory'
      img={directory}>
      </Project>
      <Project 
      deployedUrl='https://ryanscott906.github.io/Homework-4-Quiz'
      repoUrl='https://github.com/ryanscott906/Homework-4-Quiz'
      name='Quiz'
      img={quiz}>
      </Project>
      <Social />
    </div>
  )
}