import React from 'react';
import { taksTypes } from '../../../const';
import { ListWrapper, ListLink } from './styled';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const Projects = () => {
  const tasks = useSelector((state) => state.tasks);
  const arrProj = [];
  for (let task of tasks) {
    if (!arrProj.includes(task.project)) {
      arrProj.push(task.project);
    }
  }
  const findQuantity = (tasks, proj, type) => {
    const tasksFiltered = tasks
      .slice()
      .filter((item) => item.project === proj && item.type === type);
    const total = tasksFiltered.length;
    return total;
  };
  return (
    <section>
      <ListWrapper className="animate__animated animate__fadeInUp">
        <h1>Проекты</h1>
        <table>
          <thead>
            <tr>
              <td></td>
              {taksTypes
                ? taksTypes.map((item) => <th key={taksTypes.indexOf(item)}>{item}</th>)
                : null}
            </tr>
          </thead>
          <tbody>
            {arrProj.map((item) => (
              <tr key={nanoid()}>
                <td style={{ textAlign: 'start' }}>
                  <ListLink>{item}</ListLink>
                </td>
                <td>{findQuantity(tasks, item, 'queue')}</td>
                <td>{findQuantity(tasks, item, 'development')}</td>
                <td>{findQuantity(tasks, item, 'done')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ListWrapper>
    </section>
  );
};

export default Projects;
