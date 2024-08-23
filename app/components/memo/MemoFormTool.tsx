import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import {RootStackParamList} from '../../navigation/type';
import {deleteMemoList, updateMemoList} from '../../redux/slice/memoSlice';
import {MemoFormDataProps} from './MemoForm';

interface FormToolProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  memoFormData: MemoFormDataProps;
  setMemoFormData: React.Dispatch<React.SetStateAction<MemoFormDataProps>>;
  initialMemoFormData: MemoFormDataProps;
}

const MemoFormTool: React.FC<FormToolProps> = ({
  toggle,
  setToggle,
  memoFormData,
  setMemoFormData,
  initialMemoFormData,
}) => {
  const dispatch = useDispatch(); // 리덕스 함수 hook
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // 화면 이동 navigation

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 읽기/수정 을 결정하는 toggle 변경
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleToggle = () => {
    setToggle(!toggle);
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : serverMemoListData에 id에 맞는 데이터 제거
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleUpdateForm = (memoFormData: MemoFormDataProps) => {
    dispatch(updateMemoList(memoFormData)); // 리덕스 함수에 id 전달
    // navigation.navigate('MemoListPage'); // 메모리스트 이동
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : serverMemoListData에 id에 맞는 데이터 제거
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleDeleteForm = (id: string) => {
    dispatch(deleteMemoList(id)); // 리덕스 함수에 id 전달
    navigation.navigate('MemoListPage'); // 메모리스트 이동
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 취소 후 원래 데이터로 복원
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleCancleForm = () => {
    setMemoFormData(initialMemoFormData); // 초기 데이터로 변경
    setToggle(!toggle); // 읽기 모드 전환
  };

  return (
    <View style={styles.MemoFormToolWrppaer}>
      {!toggle ? (
        <View style={styles.MemoFormToolBlock}>
          <TouchableOpacity style={styles.toolButton} onPress={handleToggle}>
            <Text style={styles.toolButtonText}>편집</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toolButton}
            onPress={() => handleDeleteForm(memoFormData.id)}>
            <Text style={styles.toolButtonText}>삭제</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.MemoFormToolBlock}>
          <TouchableOpacity
            style={styles.toolButton}
            onPress={() => handleUpdateForm(memoFormData)}>
            <Text style={styles.toolButtonText}>수정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toolButton}
            onPress={handleCancleForm}>
            <Text style={styles.toolButtonText}>취소</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  MemoFormToolWrppaer: {
    width: '40%',
    height: '100%',
    backgroundColor: '#20c2db',
  },

  MemoFormToolBlock: {
    ...globalDisplay.aroundRow,
    width: '100%',
    height: '100%',
  },

  toolButton: {
    ...globalDisplay.centerRow,
    width: 40,
    height: 40,
    backgroundColor: '#db20d2',
  },

  toolButtonText: {
    fontSize: 18,
  },
});
export default MemoFormTool;
