import { of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { eliminarNota } from './api';
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
                    },
                )),
                catchError((err) => (of(
                    { type: types.DELETE_NOTA_FAILED },
                ))),
            )));
}