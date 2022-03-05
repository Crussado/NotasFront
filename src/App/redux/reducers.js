import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { deleteNotaEpic, devNotasEpic, crearNotaEpic } from '../../Notas/epic';

import notasReducer from '../../Notas/reducer';

export const rootEpic = combineEpics(
    deleteNotaEpic,
    devNotasEpic,
    crearNotaEpic
);

export const rootReducer = combineReducers({
    notasReducer,
});
