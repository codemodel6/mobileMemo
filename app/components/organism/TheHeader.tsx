import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/type';
import BackArrowIcon from '../../assets/svgIcon/BackArrowIcon';
import SearchIcon from '../../assets/svgIcon/SearchIcon';

const TheHeader = () => {
  // 리덕스의 초기 값
  const serverMemoListData = useSelector(
    (state: RootState) => state.memoReducer,
  );
  const route = useRoute();
  const memoListDataLength = serverMemoListData.reduxMemoListData.length; // reduxMemoListData 배열의 길이
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // 화면 이동 navigation

  // 현재 페이지의 이름을 확인
  const isMemoListPage = route.name === 'MemoListPage';
  const isMemoForm = route.name === 'MemoForm';

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 메모리스트에 메모 추가를 위해 메모 추가 페이지로 이동
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleNavigate = () => {
    navigation.navigate('MemoListPage');
  };
  return (
    <View style={styles.headerWrapper}>
      {isMemoForm && (
        <TouchableOpacity
          style={styles.headerBackButton}
          onPress={handleNavigate}>
          <BackArrowIcon width={24} height={24} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>메모리스트({memoListDataLength})</Text>
      {isMemoListPage && (
        <TouchableOpacity style={styles.headerSearchButton}>
          <View style={styles.svgWrapper}>
            <SearchIcon width={20} height={20} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...globalDisplay.centerRow,
    height: 70,
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingTop: 15, // 상태바 고려 설정
  },
  headerBackButton: {
    // ...globalDisplay.centerColumn,
    // top: 10,
    position: 'absolute',
    left: 10,
    top: '50%',
    backgroundColor: '#b51717',
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 20,
    color: '#ffffff',
  },
  headerSearchButton: {
    // ...globalDisplay.centerColumn,
    position: 'absolute',
    right: 10,
    paddingTop: 15,
    top: '50%',
    backgroundColor: '#b51717',
    width: 30,
    height: 30,
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
  },
  svgWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TheHeader;
