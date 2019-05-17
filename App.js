import React from 'react'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import Screen from './src/screen1'

//для аользователей Мака
/*const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(ReduxThunk)
))
*/
const store = createStore(reducers, applyMiddleware(ReduxThunk))

const App = () => {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  )
}

export default App