import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import Home from './components/Home'
import List from './components/List'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'


render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='list' component={List} />
      </Route>
    </Router>,
  document.getElementById('root')
)
