import { RootState } from '../../store/reducer';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

// first versio
export const getTodoList = (state: RootState) => state.todos.todos;

//second version
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

//eiter type every selector with the root state
// or use the useTypedSelector instead of useSelector
