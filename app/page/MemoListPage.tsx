import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {globalDisplay} from '../assets/styles/global/globalDisplay';
import MemoItem from '../components/memo/MemoItem';
import type {RootStackParamList} from '../navigation/type';
import {RootState} from '../redux/store';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const MemoListPage = () => {
  // 리덕스의 초기 값
  const serverMemoListData = useSelector(
    (state: RootState) => state.memoReducer,
  );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 메모리스트에 메모 추가를 위해 메모 추가 페이지로 이동
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleNavigate = () => {
    navigation.navigate('MemoForm');
  };

  return (
    <ScrollView
      style={styles.memoListPageWrapper}
      contentContainerStyle={styles.memoListPageDisplay}>
      {serverMemoListData.reduxMemoListData.map(it => (
        <MemoItem key={it.keyNumber} it={it} />
      ))}
      <TouchableOpacity
        style={styles.memoListPageAddButton}
        onPress={handleNavigate}>
        <Text style={styles.memoListPageAddButtonText}>추가</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  memoListPageWrapper: {
    flex: 1,
    backgroundColor: '#ca3623',
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
  },
  memoListPageAddButtonText: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default MemoListPage;
