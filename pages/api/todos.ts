import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync } from "fs";
import { TodoType } from "../../types/todo";

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
};
