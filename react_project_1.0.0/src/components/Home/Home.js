import React, { Component } from 'react'

import './home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className='content'>
            <h1>Hello!!!</h1>
            <div className='description'>
                Press "Films" for display films list or press "Add" for add new film.
            </div>
      </div>
    )
  }
}
