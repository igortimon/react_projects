import React, { Component } from 'react'
import { Link } from 'react-router'

var list = [
    {
        id: 1,
        title: 'Spiderman'
    },
    {
        id: 2,
        title: 'Man in Black'
    }
];

export default class List extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
            <h1>Фильмы:</h1>
                <ul>
                    {list.map(item => {
                        return <li key={item.id}><Link to={`/${item.id}`}>{item.title}</Link></li>
                    })}
                </ul>
        </div>
      </div>
    )
  }
}
