import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice.jsx';

export default configureStore({
  reducer: {
    users: usersReducer,
  }
})