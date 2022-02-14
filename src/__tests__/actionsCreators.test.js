import {
  createTasksAction,
  deleteTaskAction,
  doTaskAction,
  loadTasksAction,
} from "../redux/actions/actionsCreators";
import actionTypes from "../redux/actions/actionsTypes";

describe("Given an actionCreators function", () => {
  describe("When calling loadTasksAction with an array of two tasks", () => {
    test('Then it should return an action with type "load-tasks" and the task array', () => {
      const tasks = [
        { id: 1, name: "Comprar", done: false },
        { id: 2, name: "Lavar ropa", done: false },
      ];
      const expectedAction = { type: actionTypes.loadTasks, tasks };

      const action = loadTasksAction(tasks);

      expect(action).toEqual(expectedAction);
    });
  });

  describe("When calling deleteTaskAction with id:1", () => {
    test('Then it should return an action with type "delete-tasks" and the id', () => {
      const id = 1;
      const expectedAction = { type: actionTypes.deleteTask, id: 1 };

      const action = deleteTaskAction(id);

      expect(action).toEqual(expectedAction);
    });
  });

  describe("When calling createTaskAction with one task", () => {
    test('Then it should return an action with type "create-tasks" and the task', () => {
      const task = { id: 4, name: "Limpiar baño", done: false };
      const expectedAction = { type: actionTypes.createTask, task };

      const action = createTasksAction(task);

      expect(action).toEqual(expectedAction);
    });
  });

  describe("When calling doTaskAction with an id: 4", () => {
    test('Then it should return an action with type "do-tasks" and the id 4', () => {
      const id = 4;

      const expectedAction = { type: actionTypes.createTask, id };

      const action = doTaskAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});
