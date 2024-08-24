import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import BackArrowIcon from '../../assets/svgIcon/BackArrowIcon';
import SearchIcon from '../../assets/svgIcon/SearchIcon';
import {RootStackParamList} from '../../navigation/type';
import {RootState} from '../../redux/store';

// route의 타입
type MemoFormRouteProp = RouteProp<{
  MemoListPage: {title?: string};
  MemoForm: {title?: string};
}>;

const TheHeader = () => {
  // 리덕스의 초기 값
  const serverMemoListData = useSelector(
    (state: RootState) => state.memoReducer,
  );
  const route = useRoute<MemoFormRouteProp>();
  const memoListDataLength = serverMemoListData.reduxMemoListData.length; // reduxMemoListData 배열의 길이
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // 화면 이동 navigation

  // 현재 페이지의 이름을 확인
  const isMemoListPage = route.name === 'MemoListPage';
  const isMemoForm = route.name === 'MemoForm';

  const headerTitle =
    route.params?.title || `메모리스트(${memoListDataLength})`;

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
          <View style={styles.svgWrapper}>
            <BackArrowIcon width={24} height={24} />
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{headerTitle}</Text>
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
    position: 'absolute',
    left: 10,
    top: '50%',
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 20,
    color: '#ffffff',
  },
  headerSearchButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    width: 30,
    height: 30,
  },
  svgWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TheHeader;
