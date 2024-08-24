import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
  setInitialMemoFormData: React.Dispatch<
    React.SetStateAction<MemoFormDataProps>
  >;
  formTitleTextRef: React.RefObject<TextInput>;
}

const MemoFormTool: React.FC<FormToolProps> = ({
  toggle,
  setToggle,
  memoFormData,
  setMemoFormData,
  initialMemoFormData,
  setInitialMemoFormData,
  formTitleTextRef,
}) => {
  const dispatch = useDispatch(); // 리덕스 함수 hook
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // 화면 이동 navigation

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 읽기/수정 을 결정하는 toggle 변경
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleUpdateMode = () => {
    handleToggle();
    // State 업데이트 이후 제목에 focus를 준다
    setTimeout(() => {
      formTitleTextRef.current?.focus();
    }, 0);
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 읽기/수정 을 결정하는 toggle 변경
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleToggle = () => {
    setToggle(!toggle);
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 수정 confirm 메시지를 보여준다
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const showUpdateConfirm = (memoFormData: MemoFormDataProps) => {
    Alert.alert(
      '게시글 수정', // 제목
      '게시글을 수정하시겠습니까?', // 메시지
      [
        {
          text: '네', // "네" 버튼
          onPress: () => handleUpdateForm(memoFormData), // 삭제 함수
        },
        {
          text: '아니오', // "아니오" 버튼
        },
      ],
      {cancelable: true}, // 빈 공간 클릭 시 닫힘
    );
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : serverMemoListData에 id에 맞는 데이터 수정
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleUpdateForm = (memoFormData: MemoFormDataProps) => {
    // 현재 날짜를 가져온다
    const currentDate = new Date().toISOString().split('T')[0];
    // 현재 날짜 state에 반영
    setMemoFormData(prevData => ({
      ...prevData,
      date: currentDate,
    }));

    dispatch(updateMemoList(memoFormData)); // 리덕스 함수에 id 전달
    setInitialMemoFormData(memoFormData); // 초기값을 수정된 값으로 변경한다
    showCompleteAlet(); // 수정 완료 메시지
    setToggle(!toggle); // 읽기 모드 전환
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 수정 confirm 메시지를 보여준다
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const showCompleteAlet = () => {
    Alert.alert(
      '수정 완료', // 제목
      '수정이 완료되었습니다', // 메시지
      [
        {
          text: '확인',
        },
      ],
      {cancelable: true}, // 빈 공간 클릭 시 닫힘
    );
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 삭제 confirm 메시지를 보여준다
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const showDeleteConfirm = (id: string, title: string) => {
    Alert.alert(
      title, // 제목
      '게시글을 삭제하시겠습니까?', // 메시지
      [
        {
          text: '네', // "네" 버튼
          onPress: () => handleDeleteForm(id), // 삭제 함수
        },
        {
          text: '아니오', // "아니오" 버튼
        },
      ],
      {cancelable: true}, // 빈 공간 클릭 시 닫힘
    );
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
          <TouchableOpacity
            style={styles.toolButton}
            onPress={handleUpdateMode}>
            <Text style={styles.toolButtonText}>편집</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toolButton}
            onPress={() =>
              showDeleteConfirm(memoFormData.id, memoFormData.title)
            }>
            <Text style={styles.toolButtonText}>삭제</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.MemoFormToolBlock}>
          <TouchableOpacity
            style={styles.toolButton}
            onPress={() => showUpdateConfirm(memoFormData)}>
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
    width: '30%',
    height: '100%',
  },

  MemoFormToolBlock: {
    ...globalDisplay.betweenRow,
    width: '100%',
    height: '100%',
  },

  toolButton: {
    ...globalDisplay.centerRow,
    width: 40,
    height: 40,
  },

  toolButtonText: {
    fontSize: 16,
    color: '#0adaff',
  },
});
export default MemoFormTool;
