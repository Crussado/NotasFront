import initialState from "./reducerInitialState";
import * as types from './actionTypes';

const actionsHandledByEpic = state => ({
    ...state,
    apiLoading: true,
})

const devNotasSuccess = (state, action) => {
    return ({
        ...state,
        notas: action.parameters.notas,
        apiLoading: false,
    });
}

const devNotasFailed = (state) => {
    return ({
        ...state,
        notas: [],
        apiLoading: false,
    });
}

const createNotaSuccess = (state, action) => {
    let newNotas = state.notas.slice();
    const newNota = { title: action.parameters.title, body: action.parameters.body, id: action.parameters.id }
    newNotas.push(newNota);
    return ({
        ...state,
        notas: newNotas,
        apiLoading: false
    });
}

const createNotaFailed = (state) => {
    return ({
        ...state,
        apiLoading: false
    });
}

const deleteNotaSuccess = (state, action) => {
    return ({
        ...state,
        notas: state.notas.filter((nota) => nota.id !== action.parameters.id),
        apiLoading: false
    });
}

const deleteNotaFailed = state => ({
    ...state,
    notas: [],
    apiLoading: false,
})

export default function notasReducer(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_NOTAS_SUCCESS:
            return devNotasSuccess(state, action);
        case types.FETCH_NOTAS_FAILED:
            return devNotasFailed(state);
        case types.CREATE_NOTA_SUCCESS:
            return createNotaSuccess(state, action);
        case types.CREATE_NOTA_FAILED:
            return createNotaFailed(state);
        case types.DELETE_NOTA_SUCCESS:
            return deleteNotaSuccess(state, action);
        case types.DELETE_NOTA_FAILED:       
            return deleteNotaFailed(state);
        case types.UPDATE_NOTA:
            return state;
        case types.FETCH_NOTAS:
        case types.CREATE_NOTA:
        case types.DELETE_NOTA:
            return actionsHandledByEpic(state);
        default:
            return state;
    }
}
