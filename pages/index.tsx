import React from "react";
import { NextPage, GetServerSideProps } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";

interface IProps {
  todos: TodoType[];
}

const app: NextPage<IProps> = ({ todos }) => {
  console.log(process.env.NEXT_PUBLIC_API_URL, "CLIENT");
  return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    console.log(process.env.NEXT_PUBLIC_API_URL, "SERVER");
    const { data } = await getTodosAPI();
    console.log(data);
    return { props: { todos: data } };
  } catch (error) {
    console.log(error);
    return { props: { todos: [] } };
  }
};

export default app;
