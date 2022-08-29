// import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/animes'

function searchAnimes(title) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(title)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export {
    searchAnimes
}