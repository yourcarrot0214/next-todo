import axios from ".";
import { TodoType } from "../../types/todo";

export const getTodosAPI = () => axios.get<TodoType[]>("/api/todos");
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);

// * addTodo API
interface AddTodoAPIBody {
  text: string;
  color: TodoType["color"];
}

export const addTodoAPI = (body: AddTodoAPIBody) =>
  axios.post("api/todos", body);
