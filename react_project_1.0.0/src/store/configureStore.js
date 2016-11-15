import { createStore } from 'redux'
import listStateReduser from '../reducers/listStateReduser'

// const initialState = {
//     list: [
//         {
//             id: 1,
//             Title: 'Blazing Saddles',
//             'Release Year': 1974,
//             Format: 'VHS',
//             Stars: ['Mel Brooks', 'Clevon Little', 'Harvey Korman', 'Gene Wilder', 'Slim Pickens', 'Madeline Kahn']
//         }
//     ]
// }

export default function configureStore(initialState) {
      let store = createStore(listStateReduser, initialState);

      if (module.hot) {
          module.hot.accept('../reducers/listStateReduser', () => {
          const nextRootReducer = require('../reducers/listStateReduser')
          store.replaceReducer(nextRootReducer)
        })
      }

      return store;
  }
