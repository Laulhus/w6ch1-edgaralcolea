import {
  deleteTaskAction,
  loadTasksAction,
} from "../redux/actions/actionsCreators";
import taskReducer from "../redux/reducers/taskReducer";

describe("Given a taskReducer function", () => {
  describe("When receives a loadTasks action with an array of tasks", () => {
    test("Then it should return the tasks in the action", () => {
      const tasks = [
        { id: 1, name: "Comprar", done: false },
        { id: 2, name: "Lavar ropa", done: false },
      ];
      const action = loadTasksAction(tasks);

      const newTasks = taskReducer([], action);

      expect(newTasks).toEqual(tasks);
    });
  });

  describe("When receives an action with an unknown type", () => {
    test("Then it should return the tasks unchanged", () => {
      const tasks = [
        { id: 1, name: "Comprar", done: false },
        { id: 2, name: "Lavar ropa", done: false },
      ];
      const action = { type: "wrong" };

      const newTasks = taskReducer(tasks, action);

      expect(newTasks).toEqual(tasks);
    });
  });

  describe("When receives neither an action nor state", () => {
    test("Then it should return the tasks unchanged", () => {
      const tasks = [];

      const newTasks = taskReducer();

      expect(newTasks).toEqual(tasks);
    });
  });

  describe("When receives a deleteTaskAction with an id 1", () => {
    test("Then it should return an array with the second task", () => {
      const tasks = [
        { id: 1, name: "Comprar", done: false },
        { id: 2, name: "Lavar ropa", done: false },
      ];
      const id = 1;
      const action = deleteTaskAction(id);
      const newTasks = taskReducer(tasks, action);

      expect(newTasks).toEqual(tasks);
    });
  });
});
