import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./components/Task/Task";
import loadThunk from "./redux/thunks/loadThunk";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    loadThunk(dispatch);
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Ed's Redux ToDo</h1>
      <h2 className="list-title">Tasks List:</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
