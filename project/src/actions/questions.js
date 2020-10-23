export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
import {saveQuestion,saveQuestionAnswer} from "../utils/api"
import {handleInitialData} from "./shared";
import {hideLoading, showLoading} from 'react-redux-loading'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
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
             dispatch(handleInitialData())
             dispatch(hideLoading())
             })
  }
}

export function addNewQuestion(optionOneText,optionTwoText){
  return(dispatch,getState) => {    
    const {authedUser} = getState()
    dispatch(showLoading())
    return saveQuestion({ optionOneText, optionTwoText , author:authedUser })
           .then( () => {
             dispatch(handleInitialData())
             dispatch(hideLoading())
            })
  }
}
