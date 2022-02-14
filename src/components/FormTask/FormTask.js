const FormTask = () => {
  return (
    <form onSubmit noValidate autoComplete="off">
      <label htmlFor="task">Task: </label>
      <input onChange type="text" id="task" />
      <button type="submit">Add</button>
    </form>
  );
};
export default FormTask;
