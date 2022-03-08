import { of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { eliminarNota, devolverNotas, crearNota } from './api';
import * as types from './actionTypes';

export function deleteNotaEpic(action$) {
    return action$.pipe(
        ofType(types.DELETE_NOTA),
        mergeMap((action) =>
            eliminarNota(action.parameters).pipe(
                mergeMap((data) => of(
                    {
                        type: types.DELETE_NOTA_SUCCESS,
                        parameters: action.parameters,
                        onSuccess: action.onSuccess()
                    },
                )),
                catchError((err) => (of(
                    { type: types.DELETE_NOTA_FAILED },
                ))),
            )));
}

export function devNotasEpic(action$) {
    return action$.pipe(
        ofType(types.FETCH_NOTAS),
        mergeMap((action) =>
            devolverNotas().pipe(
                mergeMap((data) => of(
                    {
                        type: types.FETCH_NOTAS_SUCCESS, 
                        parameters: {
                          notas: data.response.notas,
                        }
                    },
                )),
                catchError((err) => (of(
                    { type: types.FETCH_NOTAS_FAILED },
                ))),
            )));
}

export function crearNotaEpic(action$) {
    return action$.pipe(
        ofType(types.CREATE_NOTA),
        mergeMap((action) =>
            crearNota(action.parameters).pipe(
                mergeMap((data) => of(
                    {
                        type: types.CREATE_NOTA_SUCCESS,
                        parameters: {
                          title: data.response.title,
                          body: data.response.body,
                          id: data.response.id
                        }
                    },
                )),
                catchError((err) => (of(
                    { type: types.CREATE_NOTA_FAILED },
                ))),
            )));
}