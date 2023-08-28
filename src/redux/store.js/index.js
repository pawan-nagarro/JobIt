import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../auth/AuthSlice';

export default store = configureStore({
  reducer: {
    authReducer: authReducer,
  },
});
