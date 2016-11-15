var xhr = new XMLHttpRequest();
xhr.open('GET', 'films.json', false);
xhr.send();
const LIST = JSON.parse(xhr.responseText);
const CURRLIST = JSON.parse(xhr.responseText);

const initialState = {
    list: LIST,
    currentList: CURRLIST
}

export default function listStateReduser(state = initialState, action) {
    switch (action.type) {
        case 'ADD_REMOVE_FILM':
            return Object.assign(
                {},
                 state,
                 action.payload
              );
        case 'SEARCH':
            return Object.assign({}, state, {currentList: action.payload});
        default:
            return state;
    }
}
