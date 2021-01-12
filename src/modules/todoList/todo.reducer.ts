import {
	ToDoActions,
	ToDoState,
	ADD_TODO_START,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAIL,
	FETCH_TODOS_START,
	UPDATE_TODO_START,
	DELETE_TODO_START,
	FETCH_TODOS_FAIL,
	UPDATE_TODO_FAIL,
	DELETE_TODO_FAIL,
	FETCH_TODOS_SUCCESS,
	UPDATE_TODO_SUCCESS,
	DELETE_TODO_SUCCESS,
} from './todo.types';

const initialState: ToDoState = {
	todos: [],
	error: null,
	loading: false,
};

const reducer = (state = initialState, action: ToDoActions): ToDoState => {
	switch (action.type) {
		case ADD_TODO_START:
		case FETCH_TODOS_START:
		case UPDATE_TODO_START:
		case DELETE_TODO_START:
			return {
				...state,
				loading: true,
			};
		case ADD_TODO_SUCCESS:
			return {
				...state,
				todos: [action.payload, ...state.todos],
				loading: false,
			};
		case FETCH_TODOS_SUCCESS:
			return {
				...state,
				todos: action.payload,
				loading: false,
			};
		case DELETE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.filter((item) => item.id !== action.payload.id),
				loading: false,
			};
		case UPDATE_TODO_SUCCESS:
			return {
				...state,
				loading: false,
				todos: state.todos.map((item) =>
					item.id === action.payload.id ? action.payload : item
				),
			};
		case ADD_TODO_FAIL:
		case FETCH_TODOS_FAIL:
		case UPDATE_TODO_FAIL:
		case DELETE_TODO_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default reducer;
