import firebase from '../common/utils/firebase';
import { ToDo, ToDoItem } from './todo.types';

export const addTodo = ({ text, completed }: ToDo): ToDoItem => {
	// A post entry.
	const data: ToDoItem = {
		text,
		completed,
		id: '',
	};

	// Get a key for a new Post.
	const newKey = firebase.database().ref().child('reviews').push().key;
	if (newKey) {
		data.id = newKey;

		// Write the new post's data simultaneously in the posts list and the user's post list.
		const updates: { [key: string]: ToDoItem } = {};
		updates['/todos/' + newKey] = data;

		firebase.database().ref().update(updates);
		console.log(data);
	} else {
		Promise.reject({ message: 'Could not add new reference to firebase.' });
	}

	return data;
};

export const deleteTodo = ({ id }: { id: string }) => {
	const updates: { [key: string]: {} } = {};
	updates['/todos/' + id] = {};

	firebase.database().ref().update(updates);

	return { id };
};

export const updateTodo = (todo: ToDoItem) => {
	const updates: { [key: string]: ToDoItem } = {};
	updates['/todos/' + todo.id] = todo;

	firebase.database().ref().update(updates);

	return todo;
};

export const fetchTodos = () => {
	return firebase
		.database()
		.ref('/todos')
		.once('value')
		.then((snapshot) => {
			const todoData: ToDoItem[] = [];
			for (const key in snapshot.val()) {
				if (snapshot.val().hasOwnProperty(key)) {
					const element = snapshot.val()[key];
					todoData.push(element);
				}
			}
			return todoData;
		})
		.catch((error) => Promise.reject(error));
};
