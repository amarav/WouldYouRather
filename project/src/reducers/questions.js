import { RECEIVE_QUESTIONS,ADD_QUESTION, SAVE_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION :
      const {question} = action
      return {
        [question.qid] : question
      }
      case SAVE_QUESTION :
               return {
                ...state,
                [action.qid]: {
                  ...state[action.qid],
                      [action.answer]: {
                       ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                  }
               }
            }
    default :
      return state
  }
}