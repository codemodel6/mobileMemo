import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import {MemoListProps} from '../../data/memoListData';
import {useDispatch} from 'react-redux';
import {deleteMemoList} from '../../redux/slice/memoSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/type';

interface MemoItemProps {
  it: MemoListProps;
}

const MemoItem: React.FC<MemoItemProps> = ({it}) => {
  const dispatch = useDispatch(); // 리덕스 함수 hook
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // 화면 이동 hook

  interface FormNavigateProps {
    (id: string, title: string, description: string, updatedAt: string): void;
  }
  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : serverMemoListData에 key에 맞는 데이터 제거
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleDeleteData = (id: string) => {
    dispatch(deleteMemoList(id)); // 리덕스 함수에 key를 보내며 실행
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 메모 아이템의 데이터를 props로 상세 페이지를 연다
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleNavigate: FormNavigateProps = (
    id,
    title,
    description,
    updatedAt,
  ) => {
    navigation.navigate('MemoForm', {id, title, description, updatedAt});
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : confirm 메시지를 보여준다
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const showConfirm = (id: string, title: string) => {
    Alert.alert(
      title, // 제목
      '게시글을 삭제하시겠습니까?', // 메시지
      [
        {
          text: '네', // "네" 버튼
          onPress: () => handleDeleteData(id), // 삭제 함수
        },
        {
          text: '아니오', // "아니오" 버튼
        },
      ],
      {cancelable: true}, // 빈 공간 클릭 시 닫힘
    );
  };

  return (
    <TouchableOpacity
      style={styles.memoItemWrapper}
      onPress={() =>
        handleNavigate(it.id, it.title, it.description, it.updatedAt)
      }>
      <View style={styles.itemDataBlock}>
        <View style={styles.itemInfoBlock}>
          <Text style={styles.itemTitleText}>{it.title}</Text>
          <Text style={styles.itemDateText}>{it.updatedAt}</Text>
        </View>
        <View style={styles.itemContentsBlock}>
          <Text
            style={styles.itemContents}
            numberOfLines={1}
            ellipsizeMode="tail">
            {it.description}
          </Text>
        </View>
      </View>
      <View style={styles.itememoDeleteBlock}>
        <TouchableOpacity
          style={styles.itemDeleteButton}
          onPress={() => showConfirm(it.id, it.title)}>
          <Text style={styles.itemDeleteButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  memoItemWrapper: {
    ...globalDisplay.betweenRow,
    height: 100,
    // backgroundColor: '#d1fd0a',
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
  },

  itemDataBlock: {
    height: '100%',
    width: '90%',
  },

  itemInfoBlock: {
    marginTop: '5%',
    marginBottom: '3%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor: '#124124',
  },

  itemTitleText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10,
    color: '#000000',
  },

  itemDateText: {
    marginRight: '3%',
    fontSize: 12,
  },

  itemContentsBlock: {
    flex: 1,
    paddingTop: '1%',
    width: '100%',
    // backgroundColor: '#288096',
  },

  itemContents: {
    fontSize: 15,
  },

  itememoDeleteBlock: {
    height: '100%',
    width: '10%',
    // backgroundColor: '#b33636',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemDeleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 23,
    height: 23,
  },

  itemDeleteButtonText: {
    fontSize: 15,
    color: '#000000',
  },
});

export default MemoItem;
