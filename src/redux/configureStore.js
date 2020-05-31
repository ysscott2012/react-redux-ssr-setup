import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit'

// import monitorReducersEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger';
import rootReducer from './rootReducer'

export default function configureAppStore(preloadedState) {
    const store = configureStore({
      reducer: rootReducer,
      middleware: [loggerMiddleware, ...getDefaultMiddleware()],
      preloadedState
      // enhancers: [monitorReducersEnhancer]
    })
  
    return store
}