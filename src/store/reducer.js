import { createReducer } from '@reduxjs/toolkit';
import {
  loadTasks,
  addNewCommentToReducer,
  addNewSubtasksToReducer,
  loadTaskToRender
} from './actions';

const initialState = {
  tasks: [],
  tasks_to_render: [],
  new_comments: [],
  new_subtasks: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadTasks, (state, action) => {
    state.tasks = action.payload;
  });
  builder.addCase(loadTaskToRender, (state, action) => {
    state.tasks_to_render = action.payload;
  });
  builder.addCase(addNewCommentToReducer, (state, action) => {
    state.new_comments = action.payload;
  });
  builder.addCase(addNewSubtasksToReducer, (state, action) => {
    state.new_subtasks = action.payload;
  });
});
