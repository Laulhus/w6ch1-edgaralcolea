import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormTask from "./components/FormTask/FormTask";
import Task from "./components/Task/Task";
import { loadTaskThunk } from "./redux/thunks/taskThunks";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    loadTaskThunk(dispatch);
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Ed's Redux ToDo</h1>
      <div className="list-container">
        <h2 className="list-title">Tasks List:</h2>
        <ul className="task-list">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
        <FormTask />
      </div>
    </div>
  );
}

export default App;
