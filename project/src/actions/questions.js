export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
import {saveQuestion,saveQuestionAnswer} from "../utils/api"
import {handleInitialData} from "./shared";

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
    return saveQuestionAnswer({authedUser,qid,answer})
            .then(() => {
             dispatch(handleInitialData())
             })
  }
}

export function addNewQuestion(optionOneText,optionTwoText){
  return(dispatch,getState) => {    
    const {authedUser} = getState()
    return saveQuestion({ optionOneText, optionTwoText , author:authedUser })
           .then( () => {
             dispatch(handleInitialData())
            })
  }
}
