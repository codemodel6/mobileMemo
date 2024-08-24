import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import BackArrowIcon from '../../assets/svgIcon/BackArrowIcon';
import SearchIcon from '../../assets/svgIcon/SearchIcon';
import {RootStackParamList} from '../../navigation/type';
import {RootState} from '../../redux/store';
import {searchMemoList} from '../../redux/slice/memoSlice';

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
  const route = useRoute<MemoFormRouteProp>(); // 화면 이동시의 값 hook
  const memoListDataLength = serverMemoListData.reduxMemoListData.length; // reduxMemoListData 배열의 길이
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // 화면 이동 navigation
  const dispatch = useDispatch();

  const [searchToggle, setSearchToggle] = useState(false); // 검색창 on/off state
  const [searchText, setSearchText] = useState(''); // 검색창 입력값 state

  // 현재 페이지의 이름을 확인
  const isMemoListPage = route.name === 'MemoListPage';
  const isMemoForm = route.name === 'MemoForm';

  const headerTitle =
    route.params?.title || `메모리스트(${memoListDataLength})`;

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 메모리스트에 메모 추가를 위해 메모 추가 페이지로 이동
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleNavigate = () => {
    navigation.navigate('MemoListPage'); // MemoListPage로 이동
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : search바 on/off
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleSearchToggle = () => {
    setSearchToggle(!searchToggle); // toggle on/off
    setSearchText(''); // searchText 값을 지운다
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : search바 on/off
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleSearchListData = () => {
    dispatch(searchMemoList(searchText)); // 리덕스의 searchMemoList 함수 실행
    handleSearchToggle(); // toggle 관련 함수 실행
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
        <TouchableOpacity
          style={styles.headerSearchButton}
          onPress={handleSearchToggle}>
          <View style={styles.svgWrapper}>
            <SearchIcon width={20} height={20} />
          </View>
        </TouchableOpacity>
      )}
      {searchToggle && (
        <View style={styles.headerSearchBlock}>
          <TextInput
            style={styles.headerSearchInput}
            placeholder="제목을 입력해주세요"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearchListData}
          />
        </View>
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
  headerSearchBlock: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    padding: 5,
    zIndex: 10,
  },
  headerSearchInput: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
  },
});

export default TheHeader;
