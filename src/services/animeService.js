import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/animes'

function searchAnimes() {
    return fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${tokenService.getToken()}` }
    })
        .then(res => res.json())
}

export {
    searchAnimes
}