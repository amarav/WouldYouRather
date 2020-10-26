export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION = 'SAVE_QUESTION'
import {saveQuestion,saveQuestionAnswer} from "../utils/api"
import {hideLoading, showLoading} from 'react-redux-loading'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
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

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function answerQuestion (qid,answer) {
  return (dispatch,getState) => {
    const {authedUser} = getState()
    dispatch(showLoading())
    return saveQuestionAnswer({authedUser,qid,answer})
            .then(() => {
             dispatch(saveAnswer(authedUser, qid, answer))
             dispatch(hideLoading())
             })
  }
}

export function addNewQuestion(optionOneText,optionTwoText){
  return(dispatch,getState) => {    
    const {authedUser} = getState()
    dispatch(showLoading())
    return saveQuestion({ optionOneText, optionTwoText })
           .then( (question) => {
             dispatch(addQuestion(question))
             dispatch(hideLoading())
            })
  }
}
