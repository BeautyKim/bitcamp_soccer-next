import { all } from 'redux-saga/effects';
import { watchJoin, watchLogin } from "./userSaga.ts";
import { todoWatch } from "./todoSaga.ts";

export default function* rootSaga() {
    yield all([watchJoin(), todoWatch(), watchLogin()]);
  }