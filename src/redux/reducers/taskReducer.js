import actionTypes from "../actions/actionsTypes";

const taskReducer = (tasks = [], action = {}) => {
  let newTasks;
  debugger;
  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;
    default:
      newTasks = [...tasks];
  }
  return newTasks;
};

export default taskReducer;
