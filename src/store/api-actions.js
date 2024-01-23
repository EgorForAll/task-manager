import { loadTasks, loadTaskToRender } from './actions';

export const fetchTasks = () => (dispatch, _getState, api) => {
  api.get('/651539fd12a5d376598450b8').then(({ data }) => {
    dispatch(loadTasks(data.record));
    dispatch(loadTaskToRender(data.record));
    window.localStorage.setItem('tasks', JSON.stringify(data.record));
  });
};

export const postData = (task, callback) => (dispatch, _getState, api) =>
  api
    .put(`/651539fd12a5d376598450b8`, task)
    .then(({ data }) => {
      dispatch(loadTasks(data.record));
      dispatch(loadTaskToRender(data.record));
      window.localStorage.setItem('tasks', JSON.stringify(data.record));
    })
    .then(() => (callback ? callback(false) : null));
