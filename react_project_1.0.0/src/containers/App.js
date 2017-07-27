import React, { Component } from 'react'
import { Link } from 'react-router'

import './app.scss'

export default class App extends Component {
  render() {
    return (
        <div className='container'>
            <ul className='nav nav-pills'>
                <li><Link className='nav__link' to='/'>Home</Link></li>
                <li><Link className='nav__link' to='/film'>Films</Link></li>
                <li><Link className='nav__link' to='/add'>Add</Link></li>
            </ul>

            {this.props.children}
        </div>
    )
  }
}
