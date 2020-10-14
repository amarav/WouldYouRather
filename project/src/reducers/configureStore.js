import {createStore, combineReducers} from 'redux';
import middleware from '../middleware'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        users,
        questions,
        authedUser,
        }),       
        middleware
    );

    return store;
}