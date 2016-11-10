import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
        <div className='container'>
            <ul className='nav nav-pills'>
                <li role='presentation'><Link to='/'>Главная</Link></li>
                <li role='presentation'><Link to='/list'>Список фильмов</Link></li>
                <li role='presentation'><Link to='/film_add'>Добавить фильм</Link></li>
            </ul>

            {this.props.children}
        </div>
    )
  }
}
