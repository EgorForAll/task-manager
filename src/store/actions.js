import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_TASKS: 'load tasks',
  LOAD_TASK_TO_RENDER: 'task to render',
  ADD_NEW_COMMENT_TO_REDUCER: 'add new comment to reducer',
  ADD_NEW_SUBTASKS_TO_REDUCER: 'add new subtasks to reducer',
  SET_CURRENT_CARD: 'set current card',
  SET_CURRENT_BOARD: 'set current board'
};

export const loadTasks = createAction(ActionType.LOAD_TASKS, (tasks) => {
  return {
    payload: tasks
  };
});

export const loadTaskToRender = createAction(ActionType.LOAD_TASK_TO_RENDER, (tasks) => {
  return {
    payload: tasks
  };
});

export const addNewCommentToReducer = createAction(
  ActionType.ADD_NEW_COMMENT_TO_REDUCER,
  (comment) => {
    return {
      payload: comment
    };
  }
);

export const addNewSubtasksToReducer = createAction(
  ActionType.ADD_NEW_SUBTASKS_TO_REDUCER,
  (subtask) => {
    return {
      payload: subtask
    };
  }
);
