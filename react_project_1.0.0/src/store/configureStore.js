import { createStore } from 'redux'
import listStateReduser from '../reducers/listStateReduser'

export default function configureStore(initialState) {
      let store = createStore(listStateReduser, initialState);

      return store;
  }
