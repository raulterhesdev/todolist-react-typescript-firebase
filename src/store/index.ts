import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
//@ts-ignore
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	withDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
