const FormTask = () => {
  return (
    <form noValidate autoComplete="off">
      <label htmlFor="task">Write a new task: </label>
      <input type="text" id="task" />
      <button type="submit">Add</button>
    </form>
  );
};
export default FormTask;
