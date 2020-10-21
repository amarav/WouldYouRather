export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}


export function logoutAuthedUser (id) {
  return {
    type: LOGOUT_USER,
    id,
  }
}
