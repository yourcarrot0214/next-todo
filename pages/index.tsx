import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "리액트 공부하기", color: "red", checked: true },
  { id: 2, text: "노드 공부하기", color: "orange", checked: true },
  { id: 3, text: "넥스트 공부하기", color: "yellow", checked: false },
  { id: 4, text: "타입스크립트 공부하기", color: "green", checked: false },
  { id: 5, text: "개인 프로젝트 환경설정", color: "navy", checked: true },
];

const index: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default index;
