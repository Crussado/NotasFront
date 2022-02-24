import initialState from "./reducerInitialState";
import * as types from './actionTypes';

const actionsHandledByEpic = state => ({
    ...state,
    apiLoading: true,
})

const createNota = (state, action) => {
    let newNotas = state.notas.slice();
    const newId = state.notas[state.notas.length - 1].id + 1
    const newNota = { title: action.title, body: action.body, id: newId }
    newNotas.push(newNota);
    return ({
        ...state,
        notas: newNotas,
    });
}

const deleteNotaSuccess = (state, action) => {
    return ({
        ...state,
        notas: state.notas.filter((nota) => nota.id !== action.parameters.id),
        apiLoading: false,
    });
}

const deleteNotaFailed = state => ({
    ...state,
    notas: [],
    apiLoading: false,
})

export default function notasReducer(state = initialState, action) {
    switch(action.type) {
        case types.DELETE_NOTA:
            return actionsHandledByEpic(state);
        case types.FETCH_NOTAS:
            return state;
        case types.CREATE_NOTA:
            return createNota(state, action);
        case types.DELETE_NOTA_SUCCESS:
            return deleteNotaSuccess(state, action);
        case types.DELETE_NOTA_FAILED:
            return deleteNotaFailed(state);
        case types.UPDATE_NOTA:
            return state;
        default:
            return state;
    }
}
