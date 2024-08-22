import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const TheHeader = () => {
  // 리덕스의 초기 값
  const serverMemoListData = useSelector(
    (state: RootState) => state.memoReducer,
  );

  const memoListDataLength = serverMemoListData.reduxMemoListData.length; // reduxMemoListData 배열의 길이

  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity style={styles.headerBackButton}>
        <Text style={styles.headerBackButtonText}>뒤</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>메모리스트({memoListDataLength})</Text>
      <TouchableOpacity style={styles.headerSearchButton}>
        <Text style={styles.headerSearchButtonText}>돋</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...globalDisplay.betweenRow,
    height: 70,
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingTop: 10, // 상태바 고려 설정
  },
  headerBackButton: {
    ...globalDisplay.centerColumn,
    backgroundColor: '#ffffff',
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerBackButtonText: {
    ...globalDisplay.centerRow,
    fontSize: 15,
    color: '#000000',
  },
  headerTitle: {
    fontSize: 20,
    color: '#ffffff',
  },
  headerSearchButton: {
    ...globalDisplay.centerColumn,
    backgroundColor: '#ffffff',
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerSearchButtonText: {
    ...globalDisplay.centerRow,
    fontSize: 15,
    color: '#000000',
  },
});

export default TheHeader;
