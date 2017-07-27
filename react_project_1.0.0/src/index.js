import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'
import Home from './components/Home/Home'
import List from './components/List/List'
import Film from './components/Film/Film'
import Add from './components/Add/Add'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const store = configureStore();


render(
    <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/film' component={List}>
                <Route path='/film-:film' component={Film} />
            </Route>
            <Route path='/add' component={Add} />
          </Route>
        </Router>
     </Provider>,
  document.getElementById('root')
)

store.subscribe(() => console.log(store.getState()));
