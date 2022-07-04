import React from 'react';
import { ProjectItem } from './ProjectItem/ProjectItem';
import container from '../common/container.module.css';
import style from './projects.module.css';

export const Projects = () => {
  const projects = [
    { title: 'project 1', description: 'projects description1', image: '' },
    { title: 'project 2', description: 'projects description2', image: '' },
  ];
  return (
    <div className={style.main}>
      <div className={`${container.container} ${style.container}`}>
        <h2 className={container.title}>Projects</h2>
        <div className={style.projectItems}>
          {projects.map((el, index) =>
            <ProjectItem
              key={index}
              title={el.title}
              description={el.description}
            />,
          )}
        </div>
      </div>
    </div>
  );
};