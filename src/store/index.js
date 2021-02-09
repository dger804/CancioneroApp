import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import registerReducer from './registerReducer'
import loginReducer from './loginReducer'

import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist'

const persistenceConfigs = {
  key: "root",
  storage: storageSession
};
const reducers = combineReducers({
  registerReducer,
  loginReducer
})
const middlewares = applyMiddleware(thunk)
const persistedReducer = persistReducer(persistenceConfigs, reducers)
const store = createStore(
  persistedReducer,
  middlewares
);
const persistedStore = persistStore(store)

export { store, persistedStore }