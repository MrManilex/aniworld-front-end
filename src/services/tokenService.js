export function getToken() {
  let user = JSON.parse(localStorage.getItem('user'))
  let token = user.token
  return token
}