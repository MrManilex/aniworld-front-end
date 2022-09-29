const BASE_URL = '/api/profile'

function getCurrentlyWatching(id){
    return fetch(`${BASE_URL}/${id}/currently-watching`)
    .then(res => res.json())
}

export {
    getCurrentlyWatching
}