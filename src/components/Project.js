import React from 'react';

export default function Project(props) {
  return(
    <div>
      <a href={`${props.deployedUrl}`} target="_blank" rel='noopener noreferrer'>{props.name}</a><br/>
      <a href={`${props.repoUrl}`} target="_blank" rel='noopener noreferrer'>GitHub Repo</a>
      <a href={`${props.deployedUrl}`} target="_blank" rel='noopener noreferrer'><img className='projectImage' src={`${props.img}`} /></a>
    </div>
  )
}