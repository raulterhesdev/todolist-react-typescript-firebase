import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../common/components/Input/Input';
import Button from '../common/components/Button/Button';

import { addTodoStart } from './todo.actions';

const ListInsert = () => {
	const [text, setText] = useState('');

	const dispatch = useDispatch();

	const handleAddItem = () => {
		const todo = { text, completed: false };
		dispatch(addTodoStart(todo));
	};
	return (
		<div>
			<Input
				value={text}
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					setText(e.currentTarget.value);
				}}
				label='Add ToDo'
			/>
			<Button text='Add item' onClick={handleAddItem} />
		</div>
	);
};

export default ListInsert;
