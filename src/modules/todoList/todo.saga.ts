import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
	AddTodoStartAction,
	ADD_TODO_START,
	DeleteTodoStartAction,
	DELETE_TODO_START,
	Error,
	FetchTodoStartAction,
	FETCH_TODOS_START,
	ToDoItem,
	UpdateTodoStartAction,
	UPDATE_TODO_START,
} from './todo.types';
import {
	addTodoFail,
	addTodoSuccess,
	deleteTodoFail,
	deleteTodoSuccess,
	fetchTodoFail,
	fetchTodoSuccess,
	updateTodoFail,
	updateTodoSuccess,
} from './todo.actions';
import { addTodo, deleteTodo, fetchTodos, updateTodo } from './todo.api';

function* addTodoSaga(action: AddTodoStartAction) {
	try {
		const data: ToDoItem = yield call(addTodo, action.payload);
		yield put(addTodoSuccess(data));
	} catch (error) {
		const errorMessage: Error = {
			message: error.meesage,
			originator: 'addTodoSaga',
		};
		yield put(addTodoFail(errorMessage));
	}
}

function* fetchTodoSaga(action: FetchTodoStartAction) {
	try {
		const data: ToDoItem[] = yield call(fetchTodos);
		yield put(fetchTodoSuccess(data));
	} catch (error) {
		const errorMessage: Error = {
			message: error.meesage,
			originator: 'fetchTodoSaga',
		};
		yield put(fetchTodoFail(errorMessage));
	}
}

function* updateTodoSaga(action: UpdateTodoStartAction) {
	try {
		const data: ToDoItem = yield call(updateTodo, action.payload);
		yield put(updateTodoSuccess(data));
	} catch (error) {
		const errorMessage: Error = {
			message: error.meesage,
			originator: 'addTodoSaga',
		};
		yield put(updateTodoFail(errorMessage));
	}
}

function* deleteTodoSaga(action: DeleteTodoStartAction) {
	try {
		const data: { id: string } = yield call(deleteTodo, action.payload);
		yield put(deleteTodoSuccess(data));
	} catch (error) {
		const errorMessage: Error = {
			message: error.meesage,
			originator: 'deleteTodoSaga',
		};
		yield put(deleteTodoFail(errorMessage));
	}
}
const todoSaga = function* () {
	yield all([
		takeEvery(ADD_TODO_START, addTodoSaga),
		takeEvery(FETCH_TODOS_START, fetchTodoSaga),
		takeEvery(UPDATE_TODO_START, updateTodoSaga),
		takeEvery(DELETE_TODO_START, deleteTodoSaga),
	]);
};

export default todoSaga;
