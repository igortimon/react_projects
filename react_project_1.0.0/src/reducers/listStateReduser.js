// import { ADD_NEW_FILM, SEARCH } from '../actions/actionTypes'

var xhr = new XMLHttpRequest();
xhr.open('GET', 'films.json', false);
xhr.send();
const LIST = JSON.parse(xhr.responseText);

const initialState = {
    list: LIST
}

// import { store } from '../store/configureStore'

export default function listStateReduser(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NEW_FILM':
            return Object.assign({}, state, action.payload);
        case 'SEARCH':
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}
