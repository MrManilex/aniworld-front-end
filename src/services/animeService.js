// import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/animes'

function searchAnimes() {
    return fetch(BASE_URL)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export {
    searchAnimes
}