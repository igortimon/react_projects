import { ADD_NEW_FILM, SEARCH } from './actionTypes'

export function addNewFilm(newFilm) {

  return {
    type: ADD_NEW_FILM,
    payload: newFilm
  }

}

export function search(searchQuery) {

  return {
    type: SEARCH,
    payload: searchQuery
  }

}
