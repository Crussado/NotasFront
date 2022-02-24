import { remove } from '../utilities/rest';

export function eliminarNota({ id }) {
    const url = `/nota/${id}/delete/`;
    return remove(url);
}
