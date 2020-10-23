export const RECEIVE_USERS = 'RECEIVE_USERS'
import {saveUser} from "../utils/api"
import {hideLoading, showLoading} from 'react-redux-loading'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addNewUser(username, name, avatarURL) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveUser({
            username,
            name,
            avatarURL
        })
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(hideLoading())
            })
    }
}