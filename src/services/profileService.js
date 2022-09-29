import { getToken } from "./tokenService"
const BASE_URL = '/api/profile'

function getCurrentlyWatching(id){
    return fetch(`${BASE_URL}/${id}/currently-watching`,{
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
    .then(res => res.json())
}

export {
    getCurrentlyWatching
}