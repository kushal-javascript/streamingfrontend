import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import createSaga from "redux-saga";
import RootSaga from "./RootSaga";

var sagaMiddleware = createSaga();

var middleware = applyMiddleware(sagaMiddleware);

export default createStore(reducers, middleware);

sagaMiddleware.run(RootSaga);
