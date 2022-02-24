import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from './reducers';

const composeEnhancers = (window)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const epicMiddleware = createEpicMiddleware();

const middleware = applyMiddleware(epicMiddleware);

const store = createStore(
    rootReducer,
    composeEnhancers(middleware),
);

epicMiddleware.run(rootEpic);

export default store;