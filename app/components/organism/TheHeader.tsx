import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/type';
import BackArrowIcon from '../../assets/svgIcon/BackArrowIcon';
import SearchIcon from '../../assets/svgIcon/searchIcon';

const TheHeader = () => {
  // 리덕스의 초기 값
  const serverMemoListData = useSelector(
    (state: RootState) => state.memoReducer,
  );

  const memoListDataLength = serverMemoListData.reduxMemoListData.length; // reduxMemoListData 배열의 길이
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // 화면 이동 navigation

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 메모리스트에 메모 추가를 위해 메모 추가 페이지로 이동
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleNavigate = () => {
    navigation.navigate('MemoListPage');
  };
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        style={styles.headerBackButton}
        onPress={handleNavigate}>
        <BackArrowIcon width={24} height={24} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>메모리스트({memoListDataLength})</Text>
      <TouchableOpacity style={styles.headerSearchButton}>
        <SearchIcon width={24} height={24} />
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
    // backgroundColor: '#ffffff',
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: '#ffffff',
  },
  headerSearchButton: {
    ...globalDisplay.centerColumn,
    // backgroundColor: '#ffffff',
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
