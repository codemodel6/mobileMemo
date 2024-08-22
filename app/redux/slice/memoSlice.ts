import {createSlice} from '@reduxjs/toolkit';
import {memoListData} from '../../data/memoListData';

export const memoReducer = createSlice({
  name: 'memoReducer',
  initialState: {
    reduxMemoListData: memoListData,
  },
  reducers: {
    addMemoList: state => {
      console.log(state.reduxMemoListData);
    },
  },
});

export const {addMemoList} = memoReducer.actions;

export default memoReducer.reducer;
