import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createStore} from "redux"
import{Provider} from "react-redux"
import RootReducer from './assets/redux/reducers/RootReducer'

const store = createStore(RootReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <App/>
</Provider>,
)
