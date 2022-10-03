import { getToken } from "./tokenService"
const BASE_URL = '/api/profile'

function getCurrentlyWatching(userId){
    return fetch(`${BASE_URL}/${userId}/currently-watching`,{
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
    .then(res => res.json())
}

export {
    getCurrentlyWatching
}