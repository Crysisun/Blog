import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index';

export default function(state = {}, action) { //default state to be a null object
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}