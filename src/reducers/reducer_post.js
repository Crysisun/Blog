import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions/index';

export default function(state = {}, action) { //default state to be a null object
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        default:
            return state;
    }
}