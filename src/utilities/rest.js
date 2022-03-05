import { ajax } from 'rxjs/ajax';

const baseUrl = 'http://localhost:8000'

export function remove(partialUrl) {
    const url = `${baseUrl}${partialUrl}`;

    return ajax({
        method: 'DELETE',
        url,
    });
}

export function patch(partialUrl, body, customHeaders = {}) {
    const url = `${baseUrl}${partialUrl}`;

    const headers = Object.assign(customHeaders);
    return ajax({
        method: 'PATCH',
        url,
        body,
        headers,
    });
}

export function update(partialUrl, body, customHeaders = {}) {
    const url = `${baseUrl}${partialUrl}`;

    const headers = Object.assign(customHeaders);
    return ajax({
        method: 'PUT',
        url,
        body,
        headers,
    });
}

export function post(partialUrl, body, customHeaders = {}) {
    const url = `${baseUrl}${partialUrl}`;

    const headers = Object.assign(customHeaders);

    return ajax({
        method: 'POST',
        url,
        body,
        headers,
    });
}

export function get(partialUrl, customHeaders = {}, responseType) {
    const url = `${baseUrl}${partialUrl}`;

    const headers = Object.assign(customHeaders);
    return ajax({
        method: 'GET',
        url,
        headers,
        responseType: responseType || 'json',
    });
}

