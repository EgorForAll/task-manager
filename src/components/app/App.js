import React, { useEffect } from 'react';
import '../../css/app.css';
import Header from '../layout/header/header';
import { Route, Switch } from 'react-router-dom';
import ProjectPage from '../pages/project-page/ProjectPage';
import TaskPage from '../pages/task-page/task-page';
import { fetchTasks } from '../../store/api-actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const onLoadTasks = () => dispatch(fetchTasks());
  useEffect(() => onLoadTasks(), []);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/tasks" component={TaskPage} exact />
        <Route path="/" component={ProjectPage} exact />
      </Switch>
    </>
  );
}

export default App;
