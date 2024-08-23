import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MemoFormDataProps} from '../../components/memo/MemoForm';
import {memoListData, MemoListProps} from '../../data/memoListData';

export const memoReducer = createSlice({
  name: 'memoReducer',
  initialState: {
    reduxMemoListData: memoListData,
  },
  reducers: {
    /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    - 함수 : reduxMemoListData에 값을 추가한다
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
    addMemoList: state => {
      // 가장 하단의 메모를 가져온다
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
      state.reduxMemoListData = [...state.reduxMemoListData, newMemoItem];
    },

    /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    - 함수 : reduxMemoListData에 key에 맞는 값을 수정한다
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
    updateMemoList: (state, action: PayloadAction<MemoFormDataProps>) => {
      // 현재 날짜를 가져온다
      const currentDate = new Date().toISOString().split('T')[0];
      // map 함수로 기존 배열을 update한다
      state.reduxMemoListData = state.reduxMemoListData.map(it => {
        if (it.id === action.payload.id) {
          // action.payload = 변경할 받은 데이터 | it = 기존데이터
          const updatedMemo: MemoListProps = {
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.contents,
            createdAt: it.createdAt,
            updatedAt: currentDate,
            keyNumber: it.keyNumber,
          };

          return updatedMemo;
        }
        return it;
      });
    },

    /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    - 함수 : reduxMemoListData에 key에 맞는 값을 제거한다
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
    deleteMemoList: (state, action: PayloadAction<string>) => {
      state.reduxMemoListData = state.reduxMemoListData.filter(
        it => it.id !== action.payload, // key와 전달받는 key의 값이 일치하면 필터
      );
    },
  },
});

export const {addMemoList, updateMemoList, deleteMemoList} =
  memoReducer.actions;

export default memoReducer.reducer;
