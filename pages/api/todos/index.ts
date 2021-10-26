import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync } from "fs";
import { TodoType } from "../../../types/todo";
import Data from "../../../lib/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todosBuffer = readFileSync("data/todos.json");
      const todosString = todosBuffer.toString();
      if (!todosString) {
        res.statusCode = 200;
        res.send([]);
      }
      const todos: TodoType[] = JSON.parse(todosString);
      res.statusCode = 200;
      return res.send(todos);
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.send(error);
    }
  }

  if (req.method === "POST") {
    // * 전달된 값을 확인
    const { text, color } = req.body;
    if (!text || !color) {
      res.statusCode = 400;
      return res.send("text 혹은 color가 없습니다.");
    }

    const todos = Data.todo.getList();
    let todoId: number;
    if (todos.length > 0) {
      todoId = todos[todos.length - 1].id + 1;
    } else {
      todoId = 1;
    }

    const newTodo = {
      id: todoId,
      text,
      color,
      checked: false,
    };

    Data.todo.write([...todos, newTodo]);
    res.status(200).end();
  }
};
