import { ADD_REMOVE_FILM, SEARCH } from './actionTypes'

export function addRemFilm(newFilm) {

  return {
    type: ADD_REMOVE_FILM,
    payload: newFilm
  }

}

export function search(searchQuery) {

  return {
    type: SEARCH,
    payload: searchQuery
  }

}
