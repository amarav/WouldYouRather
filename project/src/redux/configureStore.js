import {createStore, combineReducers} from 'redux';
import middleware from '../middleware'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        
        }, middleware)
    );

    return store;
}