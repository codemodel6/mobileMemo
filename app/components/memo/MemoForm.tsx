import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import {FormScreenProps} from '../../navigation/type';
import MemoFormTool from './MemoFormTool';

export interface MemoFormDataProps {
  id: string;
  title: string;
  date: string;
  contents: string;
}

const MemoForm = ({route}: FormScreenProps) => {
  const {id, title, description, updatedAt} = route.params; // MemoItem에서 전달한 props
  const [toggle, setToggle] = useState<boolean>(false); // 읽기/수정 구분 state

  // Form의 초기 데이터 백업
  const [initialMemoFormData, setInitialMemoFormData] =
    useState<MemoFormDataProps>({
      id: id,
      title: title,
      date: updatedAt,
      contents: description,
    });

  // Form의 데이터 객체 state
  const [memoFormData, setMemoFormData] = useState<MemoFormDataProps>({
    id: id,
    title: title,
    date: updatedAt,
    contents: description,
  });

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : Form 데이터 객체 수정 (keyof interface는 interface의 key 값만 넣을 수 있는 타입)
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleMemoFormData = (name: keyof MemoFormDataProps, value: string) => {
    setMemoFormData(prevData => ({
      ...prevData, // 이전 데이터
      [name]: value, // 이름 키로 값 변경
    }));
  };

  return (
    <ScrollView
      style={styles.memoFormWrapper}
      contentContainerStyle={styles.memoFormContainer}>
      <View style={styles.formTitleBlock}>
        <TextInput
          style={styles.formTitleText}
          placeholder="제목"
          value={memoFormData.title}
          onChangeText={text => handleMemoFormData('title', text)}
          editable={toggle}
        />
        <MemoFormTool
          toggle={toggle}
          setToggle={setToggle}
          id={id}
          memoFormData={memoFormData}
          setMemoFormData={setMemoFormData}
          initialMemoFormData={initialMemoFormData}
          setInitialMemoFormData={setInitialMemoFormData}
        />
      </View>
      <View style={styles.formDateBlock}>
        <TextInput
          style={styles.formDateText}
          value={memoFormData.date}
          editable={false}
        />
      </View>
      <View style={styles.formContentsBlock}>
        <TextInput
          style={styles.formContentsText}
          placeholder="내용을 입력해주세요"
          value={memoFormData.contents}
          onChangeText={text => handleMemoFormData('contents', text)}
          editable={toggle}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  memoFormWrapper: {
    flex: 1,
    // backgroundColor: '#c22a2a',
    paddingHorizontal: 30,
  },

  memoFormContainer: {
    flexGrow: 1,
  },

  formTitleBlock: {
    ...globalDisplay.betweenRow,
    width: '100%',
    height: 80,
    // backgroundColor: '#d38715',
  },

  formTitleText: {
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
  },

  formToolBlock: {
    width: '40%',
    height: '100%',
  },

  formDateBlock: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: 50,
    // backgroundColor: '#e3d513',
  },

  formDateText: {
    fontSize: 15,
  },

  formContentsBlock: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#77d215',
  },

  formContentsText: {
    fontSize: 18,
    color: '#000000',
  },
});

export default MemoForm;
