import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/rootReducer'
import mySaga from '../sagas/mySaga'

export default function configureStore () {
  const sagaMiddleware = createSagaMiddleware()
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  )
  
  sagaMiddleware.run(mySaga)
  return store
}
