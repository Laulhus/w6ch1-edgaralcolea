import { useEffect } from "react";
import { useDispatch } from "react-redux";
import loadThunk from "./redux/thunks/loadThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadThunk(dispatch);
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Ed's Redux ToDo</h1>
      <h2 className="list-title">Tasks List:</h2>
      <ul className="task-list"></ul>
    </div>
  );
}

export default App;
