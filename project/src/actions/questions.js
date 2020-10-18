export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
import {saveQuestion, saveQuestionAnswer} from "../utils/api"
import {handleInitialData} from "./shared";

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function answerQuestion (quesId,answer) {
  return (dispatch,getState) => {
    const {authedUser,users} = getState()
    console.log('inside action')
    console.log(users[authedUser].answers)
    console.log(quesId)
    console.log(answer)
    return saveQuestionAnswer(authedUser,quesId,answer)
            .then(() => {
             dispatch(handleInitialData())
             })
  }
}