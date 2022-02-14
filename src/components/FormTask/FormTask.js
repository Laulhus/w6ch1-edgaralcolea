const FormTask = () => {
  return (
    <form onSubmit noValidate autoComplete="off">
      <label htmlFor="task">Write a new task: </label>
      <input onChange type="text" id="task" />
      <button type="submit">Add</button>
    </form>
  );
};
export default FormTask;
