import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user/userSlice';
import counterReducer from './counter/counterSlice';

const reducer = {
    userState: userReducer,
    counterState: counterReducer
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store;