import {configureStore} from '@reduxjs/toolkit';
import memoReducer from './slice/memoSlice';

const store = configureStore({
  reducer: {
    memoReducer: memoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // 리덕스의 타입
export default store;
