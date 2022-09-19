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

function getTrending() {
    return fetch(`${BASE_URL}/trending`, {
        method: 'POST'
    })
        .then(res => res.json())
}

function getUpcoming() {
    return fetch(`${BASE_URL}/upcoming`, {
        method: 'POST'
    })
        .then(res => res.json())
}

function getATPopular() {
    return fetch(`${BASE_URL}/atpopular`, {
        method: 'POST'
    })
        .then(res => res.json())
}

export {
    searchAnimes,
    getTrending,
    getUpcoming,
    getATPopular
}