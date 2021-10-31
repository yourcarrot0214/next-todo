import { HYDRATE, createWrapper, Context } from "next-redux-wrapper";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import todo from "./todo";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const rootReducer = combineReducers({
  todo: todo.reducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

// const bindMiddleware = (middleware: any) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

const initStore = (context: Context) => {
  return configureStore({
    reducer,
    devTools: true,
  });
};

export const wrapper = createWrapper(initStore);
// export const wrapper = createWrapper<Store<RootState>>(initStore, {
//   debug: true,
// });
