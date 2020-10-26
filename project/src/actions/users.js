export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION_TO_USER'
import {saveUser} from "../utils/api"
import {hideLoading, showLoading} from 'react-redux-loading'
import { saveQuestionAnswer } from '../utils/api'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}


export function saveAnswer(authedUser, qid, answer) {
	return {
		type: SAVE_QUESTION,
		authedUser,
		qid,
		answer
	}
}


export function addQuestion(authedUser, qid) {
	return {
        type: ADD_QUESTION,
        authedUser,
        qid
      }
}

export function handleSaveAnswerUser(qid, answer) {
	return (dispatch, getState) => {

		const { authedUser } = getState()

		return saveQuestionAnswer({ authedUser, qid, answer })
				.then(() => dispatch(saveAnswer(authedUser, qid, answer)))
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