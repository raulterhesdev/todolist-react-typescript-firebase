import React from 'react';
import Header from './modules/common/components/Header/Header';
import TodoList from './modules/todoList/TodoList';

import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<TodoList />
		</div>
	);
};

export default App;
