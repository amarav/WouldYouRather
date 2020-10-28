import { getInitialData } from '../utils/api'  
import {hideLoading, showLoading} from 'react-redux-loading'
import { receiveUsers, handleSaveAnswerUser } from './users'
import { receiveQuestions, answerQuestion } from './questions'


export function handleInitialData () {
  return (dispatch) => {    
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions)) 
        dispatch(hideLoading())
      })
  }
}





export function handleSaveAnswer(qid, answer) {
	return (dispatch) => {
		dispatch(answerQuestion(qid, answer))
		dispatch(handleSaveAnswerUser(qid, answer))
	}
}


