const Task = ({ actionOnClick, task: { name, done } }) => {
  const handleClick = (event) => {
    event.preventDefault();
    actionOnClick();
  };

  return (
    <div className="list">
      <li className={`list-item ${done && "done"}`}>{name} </li>
      <a className="delete" href="delete" onClick={handleClick}>
        X
      </a>
    </div>
  );
};
export default Task;
