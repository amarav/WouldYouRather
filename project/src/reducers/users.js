import { RECEIVE_USERS,SAVE_QUESTION, ADD_USER_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
      case SAVE_QUESTION :
			return {
				...state,
		        [action.authedUser]: {
		        	...state[action.authedUser],
		          	answers: {
		            	...state[action.authedUser].answers,
		            	[action.qid]: action.answer
		          	}
		        }
			}

		case ADD_USER_QUESTION :
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.qid])
        }
      };
    default :
      return state
  }
}