import actionTypes from "./actionsTypes";

export const loadTasksAction = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const deleteTasksAction = (id) => ({
  type: actionTypes.deleteTask,
  id,
});

export const createTasksAction = (task) => ({
  type: actionTypes.createTask,
  task,
});

export const doTaskAction = (id) => ({
  type: actionTypes.createTask,
  id,
});
