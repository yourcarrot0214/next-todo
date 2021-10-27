import { TodoType } from "../types/todo";

// ? action type 정의
export const SET_TODO_LIST = "todo/SET_TODO_LIST";

// ? action 생성자 정의, 항상 모듈의 action 생성자들을 함수 형태로 export 해야 한다.
export const setTodo = (payload: TodoType[]) => {
  return {
    type: SET_TODO_LIST,
    payload,
  };
};

export const todoActions = { setTodo };

interface TodoReduxState {
  todos: TodoType[];
}

// ? 초기 상태
const initialState: TodoReduxState = {
  todos: [],
};

// ? 항상 reducer()란 이름의 함수를 export default 해야 한다.
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_TODO_LIST:
      const newState = { ...state, todos: action.payload };
      return newState;
    default:
      return state;
  }
}
