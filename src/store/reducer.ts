import { combineReducers } from 'redux';

import todoReducer from '../modules/todoList/todo.reducer';

export const rootReducer = combineReducers({
	todos: todoReducer,
});

// needed by react-redux
export type RootState = ReturnType<typeof rootReducer>;
