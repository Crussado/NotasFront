import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { deleteNotaEpic } from '../../Notas/epic';

import notasReducer from '../../Notas/reducer';

export const rootEpic = combineEpics(
    deleteNotaEpic,
);

export const rootReducer = combineReducers({
    notasReducer,
});
