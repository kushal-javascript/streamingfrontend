import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

function MovieDetail(action) {
  console.log("MovieDetail");
  return axios({
    method: "get",
    url: "http://localhost:5000/api/allassets",
    data: {},
  });
}

function* MovieDetailGenerator(action) {
  var result = yield call(MovieDetail, action);
  if (result.status == 200) {
    console.log(result.data.videos);
    yield put({ type: "GET_DETAIL", payload: result.data.videos });
  }
}

export function* MovieDetailSaga() {
  yield takeEvery("GET_MOVIES_DETAIL", MovieDetailGenerator);
}
