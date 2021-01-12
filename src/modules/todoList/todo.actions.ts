import {
	ToDo,
	Error,
	ADD_TODO_START,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAIL,
	FETCH_TODOS_START,
	AddTodoStartAction,
	AddTodoFailAction,
	AddTodoSuccessAction,
	ToDoItem,
	FetchTodoStartAction,
	FETCH_TODOS_SUCCESS,
	FetchTodoSuccessAction,
	FetchTodoFailAction,
	FETCH_TODOS_FAIL,
	UpdateTodoStartAction,
	UPDATE_TODO_START,
	UpdateTodoSuccessAction,
	UPDATE_TODO_SUCCESS,
	UpdateTodoFailAction,
	UPDATE_TODO_FAIL,
	DeleteTodoStartAction,
	DELETE_TODO_START,
	DELETE_TODO_SUCCESS,
	DeleteTodoSuccessAction,
	DeleteTodoFailAction,
	DELETE_TODO_FAIL,
} from './todo.types';

export const addTodoStart = (payload: ToDo): AddTodoStartAction => ({
	type: ADD_TODO_START,
	payload,
});
export const addTodoSuccess = (payload: ToDoItem): AddTodoSuccessAction => ({
	type: ADD_TODO_SUCCESS,
	payload,
});
export const addTodoFail = (payload: Error): AddTodoFailAction => ({
	type: ADD_TODO_FAIL,
	payload,
});

export const fetchTodoStart = (): FetchTodoStartAction => ({
	type: FETCH_TODOS_START,
});
export const fetchTodoSuccess = (
	payload: ToDoItem[]
): FetchTodoSuccessAction => ({
	type: FETCH_TODOS_SUCCESS,
	payload,
});
export const fetchTodoFail = (payload: Error): FetchTodoFailAction => ({
	type: FETCH_TODOS_FAIL,
	payload,
});

export const updateTodoStart = (payload: ToDoItem): UpdateTodoStartAction => ({
	type: UPDATE_TODO_START,
	payload,
});
export const updateTodoSuccess = (
	payload: ToDoItem
): UpdateTodoSuccessAction => ({
	type: UPDATE_TODO_SUCCESS,
	payload,
});
export const updateTodoFail = (payload: Error): UpdateTodoFailAction => ({
	type: UPDATE_TODO_FAIL,
	payload,
});

export const deleteTodoStart = (payload: {
	id: string;
}): DeleteTodoStartAction => ({
	type: DELETE_TODO_START,
	payload,
});

export const deleteTodoSuccess = (payload: {
	id: string;
}): DeleteTodoSuccessAction => ({
	type: DELETE_TODO_SUCCESS,
	payload,
});

export const deleteTodoFail = (payload: Error): DeleteTodoFailAction => ({
	type: DELETE_TODO_FAIL,
	payload,
});
