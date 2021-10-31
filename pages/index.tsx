import React from "react";
import { NextPage, GetServerSideProps } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

interface IProps {
  todos: TodoType[];
}

const app: NextPage<IProps> = () => {
  return <TodoList todos={[]} />;
};

//! 교재 코드 사용시 getServerSideProps의 프로퍼티인 async 함수에 대한 에러 발생
// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     console.log(store);
//     try {
//       const { data } = await getTodosAPI();
//       store.dispatch(todoActions.setTodo(data));
//       return { props: { todos: data } };
//     } catch (error) {
//       console.log(error);
//       return { props: { todos: [] } };
//     }
//   }
// );

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    try {
      console.log(store);
      const { data } = await getTodosAPI();
      store.dispatch(todoActions.setTodo(data));
      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  }
);

export default app;
