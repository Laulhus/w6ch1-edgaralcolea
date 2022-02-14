import { loadTasksAction } from "../actions/actionsCreators";

const loadThunk = async (dispatch) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const data = await fetch(apiUrl);
  const tasks = await data.json();
  if (data.ok) dispatch(loadTasksAction(tasks));
};
export default loadThunk;
