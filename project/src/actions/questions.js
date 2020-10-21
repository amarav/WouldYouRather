export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
import {saveQuestionAnswer} from "../utils/api"
import {handleInitialData} from "./shared";

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
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