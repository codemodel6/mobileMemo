import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import {MemoListProps} from '../../data/memoListData';
import {useDispatch} from 'react-redux';
import {deleteMemoList} from '../../redux/slice/memoSlice';

interface MemoItemProps {
  it: MemoListProps;
}

const MemoItem: React.FC<MemoItemProps> = ({it}) => {
  const dispatch = useDispatch();

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : serverMemoListData에 key에 맞는 데이터 제거
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleDeleteData = (keyNumber: number) => {
    dispatch(deleteMemoList(keyNumber)); // 리덕스 함수에 key를 보내며 실행
  };

  return (
    <View style={styles.memoItemWrapper}>
      <View style={styles.itemDataBlock}>
        <View style={styles.itemInfoBlock}>
          <Text style={styles.itemTitleText}>{it.title}</Text>
          <Text style={styles.itemDateText}>{it.updatedAt}</Text>
        </View>
        <View style={styles.itemContentsBlock}>
          <Text style={styles.itemContents}>{it.description}</Text>
        </View>
      </View>
      <View style={styles.itememoDeleteBlock}>
        <TouchableOpacity
          style={styles.itemDeleteButton}
          onPress={() => handleDeleteData(it.keyNumber)}>
          <Text style={styles.itemDeleteButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
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
