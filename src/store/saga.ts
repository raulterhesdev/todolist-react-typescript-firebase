import { all } from 'redux-saga/effects';
import todoSaga from '../modules/todoList/todo.saga';

export default function* saga() {
	yield all([todoSaga()]);
}
