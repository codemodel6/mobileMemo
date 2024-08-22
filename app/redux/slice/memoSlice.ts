import {createSlice} from '@reduxjs/toolkit';
import {memoListData, MemoListProps} from '../../data/memoListData';

export const memoReducer = createSlice({
  name: 'memoReducer',
  initialState: {
    reduxMemoListData: memoListData,
  },
  reducers: {
    /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    - 리듀서 : reduxMemoListData에 값을 추가한다
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
    addMemoList: state => {
      // 가장 상단의 메모를 가져온다
      const lastMemo =
        state.reduxMemoListData[state.reduxMemoListData.length - 1];
      // 가장 상단 메모 keyNumber + 1
      const keyNumber = lastMemo ? lastMemo.keyNumber + 1 : 1;
      // 현재 날짜를 가져온다
      const currentDate = new Date().toISOString().split('T')[0];

      // 새롭게 추가할 메모아이템을 만든다
      const newMemoItem: MemoListProps = {
        id: `AMIFE-6AEM-EFIAM-MEIFE${keyNumber}`,
        title: '제목없음',
        description: '내용없음',
        createdAt: currentDate,
        updatedAt: currentDate,
        keyNumber: keyNumber,
      };

      // reduxMemoListData에 값을 추가한다
      state.reduxMemoListData = [newMemoItem, ...state.reduxMemoListData];
    },
  },
});

export const {addMemoList} = memoReducer.actions;

export default memoReducer.reducer;
