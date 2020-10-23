import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'  
import {hideLoading, showLoading} from 'react-redux-loading'

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