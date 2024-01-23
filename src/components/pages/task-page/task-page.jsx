import React, { useEffect, useRef, useState } from 'react';
import { TasksContainer, Select, SearchDiv } from './styled';
import { loadTaskToRender } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getDefCard } from '../../../const';
import TaskTable from '../../blocks/task-table/task-table';
import TaskList from '../../blocks/task-list/task-list';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();
  const onLoadTasksToRender = (tasks) => dispatch(loadTaskToRender(tasks));

  //Если данные есть в LocalStorage, то используем их
  useEffect(() => {
    const tasksFromLS = JSON.parse(window.localStorage.getItem('tasks'));
    if (tasksFromLS) {
      setTasks(tasksFromLS);
    }
    onLoadTasksToRender(tasksFromLS);
  }, [filter]);

  const selectRef = useRef();
  const tasksToRender = useSelector((state) => state.tasks_to_render);
  const ToFilterTasks = (tasks, type) => tasks.slice().filter((item) => item.type === type);

  // Логика добавления новой задачи
  const addNewCard = (type, id) => {
    const newCard = getDefCard(type, id);
    onLoadTasksToRender([...tasksToRender, newCard]);
    setTimeout(
      () => window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' }),
      300
    );
  };

  // Переключение фильтров
  useEffect(() => {
    const tasksFromLS = JSON.parse(window.localStorage.getItem('tasks'));
    switch (filter) {
      case 'queue':
        onLoadTasksToRender(tasksFromLS.filter((task) => task.type === 'queue'));
        break;
      case 'development':
        onLoadTasksToRender(tasksFromLS.filter((task) => task.type === 'development'));
        break;
      case 'done':
        onLoadTasksToRender(tasksFromLS.filter((task) => task.type === 'done'));
        break;
      case 'all':
        onLoadTasksToRender(tasksFromLS);
        break;
    }
  }, [filter]);

  return (
    <section>
      <TasksContainer>
        <SearchDiv>
          <label htmlFor="filter">Отфильтровать задачи:</label>
          <Select
            ref={selectRef}
            id="filter"
            defaultValue={'all'}
            onChange={() => setFilter(selectRef.current.value)}>
            <option value="all">all</option>
            <option value="queue">queue</option>
            <option value="development">development</option>
            <option value="done">done</option>
          </Select>
        </SearchDiv>
        <h1>Tasks</h1>
        {/* в зависимости от фильтра меняется отображение страницы, если выбран фильтр все, то экран делится на три столбца для рендера задача queue, development, done соответственно*/}
        {filter === 'all' ? (
          <TaskTable
            addNewCard={addNewCard}
            ToFilterTasks={ToFilterTasks}
            tasksToRender={tasksToRender}
          />
        ) : (
          <TaskList type={filter} tasksToRender={tasksToRender} ToFilterTasks={ToFilterTasks} />
        )}
      </TasksContainer>
    </section>
  );
};

export default TaskPage;
