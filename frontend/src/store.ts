import {createStore, applyMiddleware} from 'redux';
import reducers from './models/reducers';

// saga
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from '@redux-devtools/extension';
import rootSaga from './models/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;