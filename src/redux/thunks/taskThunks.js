import { loadTasksAction, deleteTaskAction } from "../actions/actionsCreators";

export const loadTaskThunk = async (dispatch) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = await fetch(apiUrl);
  const tasks = await response.json();
  if (response.ok) dispatch(loadTasksAction(tasks));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  debugger;
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  dispatch(deleteTaskAction());
};
