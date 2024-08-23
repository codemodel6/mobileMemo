import React, {useRef} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {globalDisplay} from '../assets/styles/global/globalDisplay';
import MemoItem from '../components/memo/MemoItem';
import {addMemoList} from '../redux/slice/memoSlice';
import {RootState} from '../redux/store';

const MemoListPage = () => {
  // 리덕스의 초기 값
  const serverMemoListData = useSelector(
    (state: RootState) => state.memoReducer,
  );
  const scrollViewRef = useRef<ScrollView | null>(null); // 스크롤뷰 ref
  const dispatch = useDispatch(); // 리덕스의 함수

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : serverMemoListData에 데이터 추가
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleCreateData = () => {
    dispatch(addMemoList()); // 리덕스 함수 실행

    // 리덕스 데이터 추가 작업 후 스크롤을 가장 하단으로 내린다
    setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({animated: true});
      }
    }, 0);
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.memoListPageWrapper}
      contentContainerStyle={styles.memoListPageDisplay}>
      {serverMemoListData.reduxMemoListData.map(it => (
        <MemoItem key={it.keyNumber} it={it} />
      ))}
      <TouchableOpacity
        style={styles.memoListPageAddButton}
        onPress={handleCreateData}>
        <Text style={styles.memoListPageAddButtonText}>추가</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  memoListPageWrapper: {
    flex: 1,
    // backgroundColor: '#ca3623',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  memoListPageDisplay: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  memoListPageAddButton: {
    ...globalDisplay.centerRow,
    height: 40,
    width: '70%',
    backgroundColor: '#000000',
    marginBottom: 50,
  },
  memoListPageAddButtonText: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default MemoListPage;
