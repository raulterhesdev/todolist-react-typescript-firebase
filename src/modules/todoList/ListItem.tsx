import { useDispatch } from 'react-redux';
import { ToDoItem } from './todo.types';
import { deleteTodoStart, updateTodoStart } from './todo.actions';

import { useEffect, useState } from 'react';

type Props = {
	item: ToDoItem;
};

const ListItem = ({ item }: Props) => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		setValue(item.text);
	}, [item.text]);

	const updateValue = (e: React.FormEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value);
	};

	const toggleChecked = () => {
		dispatch(updateTodoStart({ ...item, completed: !item.completed }));
	};

	const submitUpdate = () => {
		if (value !== item.text) {
			dispatch(updateTodoStart({ ...item, text: value }));
		}
	};

	const deleteItem = () => {
		dispatch(deleteTodoStart({ id: item.id }));
	};

	const discardUpdate = () => {
		setValue(item.text);
	};

	return (
		<div>
			<span onClick={toggleChecked}>{item.completed ? 'done' : 'ongoing'}</span>
			<input type='text' value={value} onChange={updateValue} />
			<button onClick={deleteItem}>Delete</button>
			{item.text !== value ? (
				<>
					<button onClick={submitUpdate}>Submit</button>
					<button onClick={discardUpdate}>Discard</button>
				</>
			) : null}
		</div>
	);
};

export default ListItem;
