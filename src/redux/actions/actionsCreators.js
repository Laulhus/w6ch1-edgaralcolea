import actionTypes from "./actionTypes";

export const loadTasksAction = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const deleteTaskAction = (id) => ({
  type: actionTypes.deleteTask,
  id,
});

export const createTasksAction = (task) => ({
  type: actionTypes.createTask,
  task,
});

export const doTaskAction = (id) => ({
  type: actionTypes.doTask,
  id,
});
