const Task = ({ task }) => {
  return (
    <>
      <li className={`list-item ${task.done ? "done" : ""}`}>{task.name}</li>
      <a className="delete" href="delete">
        X
      </a>
    </>
  );
};
export default Task;
