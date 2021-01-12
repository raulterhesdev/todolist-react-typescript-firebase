// Basic types
export type ToDo = {
	text: string;
	completed: boolean;
};

export type ToDoItem = ToDo & { id: string };

export type Error = {
	message: string;
	originator: string;
};

export type ToDoState = {
	todos: ToDoItem[];
	error: Error | null;
	loading: boolean;
};

//Action types
export const ADD_TODO_START = 'ADD_TODO_START';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL';
export const FETCH_TODOS_START = 'FETCH_TODOS_START';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';
export const UPDATE_TODO_START = 'UPDATE_TODO_START';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAIL = 'UPDATE_TODO_FAIL';
export const DELETE_TODO_START = 'DELETE_TODO_START';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAIL = 'DELETE_TODO_FAIL';

// Action creator types
export type AddTodoStartAction = {
	type: typeof ADD_TODO_START;
	payload: ToDo;
};
export type AddTodoSuccessAction = {
	type: typeof ADD_TODO_SUCCESS;
	payload: ToDoItem;
};
export type AddTodoFailAction = {
	type: typeof ADD_TODO_FAIL;
	payload: Error;
};

export type FetchTodoStartAction = {
	type: typeof FETCH_TODOS_START;
};
export type FetchTodoSuccessAction = {
	type: typeof FETCH_TODOS_SUCCESS;
	payload: ToDoItem[];
};
export type FetchTodoFailAction = {
	type: typeof FETCH_TODOS_FAIL;
	payload: Error;
};

export type UpdateTodoStartAction = {
	type: typeof UPDATE_TODO_START;
	payload: ToDoItem;
};
export type UpdateTodoSuccessAction = {
	type: typeof UPDATE_TODO_SUCCESS;
	payload: ToDoItem;
};
export type UpdateTodoFailAction = {
	type: typeof UPDATE_TODO_FAIL;
	payload: Error;
};

export type DeleteTodoStartAction = {
	type: typeof DELETE_TODO_START;
	payload: { id: string };
};

export type DeleteTodoSuccessAction = {
	type: typeof DELETE_TODO_SUCCESS;
	payload: { id: string };
};

export type DeleteTodoFailAction = {
	type: typeof DELETE_TODO_FAIL;
	payload: Error;
};

// Union of all action types for the ToDo reducer
export type ToDoActions =
	| AddTodoStartAction
	| AddTodoSuccessAction
	| AddTodoFailAction
	| UpdateTodoFailAction
	| UpdateTodoStartAction
	| UpdateTodoSuccessAction
	| FetchTodoFailAction
	| FetchTodoStartAction
	| FetchTodoSuccessAction
	| DeleteTodoFailAction
	| DeleteTodoStartAction
	| DeleteTodoSuccessAction;
