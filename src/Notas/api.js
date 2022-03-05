import { remove, get, post } from '../utilities/rest';

export function eliminarNota({ id }) {
    const url = `/nota/${id}/delete_nota/`;
    return remove(url);
}

export function devolverNotas() {
    const url = `/nota/get_notas/`;
    return get(url);
}

export function crearNota({title, body}) {
    const url = `/nota/create_nota/`;
    const headers = { 'Content-Type': 'application/json' };
    return post(url, {title, body}, headers);
}