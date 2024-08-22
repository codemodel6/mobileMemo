import {createSlice} from '@reduxjs/toolkit';
import {memoListData} from '../../data/memoListData';

export const memoReducer = createSlice({
  name: 'memoReducer',
  initialState: {
    serverMemoListData: memoListData,
  },
  reducers: {
    addMemoList: state => {
      console.log(state.serverMemoListData);
    },
  },
});

export const {addMemoList} = memoReducer.actions;

export default memoReducer.reducer;
