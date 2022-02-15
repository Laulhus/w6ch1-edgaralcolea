import actionTypes from "../actions/actionTypes";

const taskReducer = (tasks = [], action = {}) => {
  let newTasks;
  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;
    case actionTypes.deleteTask:
      newTasks = tasks.filter((task) => task.id !== action.id);
    default:
      newTasks = [...tasks];
  }
  return newTasks;
};

export default taskReducer;
