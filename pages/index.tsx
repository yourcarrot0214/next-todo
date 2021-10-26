import React from "react";
import { NextPage, GetServerSideProps } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";

interface IProps {
  todos: TodoType[];
}

const app: NextPage<IProps> = ({ todos }) => {
  return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getTodosAPI();
    return { props: { todos: data } };
  } catch (error) {
    console.log(error);
    return { props: { todos: [] } };
  }
};

export default app;
