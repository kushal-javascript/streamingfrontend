import { MovieDetailSaga } from "./MovieDetailSaga";
import { fork, all } from "redux-saga/effects";

export default function* RootSaga() {
  yield all([fork(MovieDetailSaga)]);
}
