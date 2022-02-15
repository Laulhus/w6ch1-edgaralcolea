const Task = ({ actionOnClick, task: { id, name, done } }) => {
  const handleClick = (event) => {
    event.preventDefault();
    actionOnClick();
  };

  return (
    <>
      <li className={`list-item ${done ? "" : "done"}`}>
        {name}{" "}
        <a className="delete" href="delete" onClick={handleClick}>
          X
        </a>
      </li>
    </>
  );
};
export default Task;
