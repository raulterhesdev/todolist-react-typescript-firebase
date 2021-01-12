import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTodoList } from './todo.selectors';
import ListItem from './ListItem';
import { fetchTodoStart } from './todo.actions';

const ListDisplay = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodoStart());
	}, []);

	const todoList = useSelector(getTodoList);

	const displayList = todoList.map((item) => (
		<ListItem item={item} key={item.id} />
	));
	return <div>{displayList}</div>;
};

export default ListDisplay;
