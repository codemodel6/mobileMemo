import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import MemoFormTool from './MemoFormTool';
import {FormScreenProps} from '../../navigation/type';

const MemoForm = ({route}: FormScreenProps) => {
  const {id, title, description, updatedAt} = route.params; // MemoItem에서 전달한 props

  interface MemoFormDataProps {
    title: string;
    date: string;
    contents: string;
  }

  // Form의 데이터 객체 state
  const [memoFormData, setMemoFormData] = useState<MemoFormDataProps>({
    title: title,
    date: updatedAt,
    contents: description,
  });

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 현재 날짜를 가져온 후 state에 넣어준다
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  // useEffect(() => {
  //   // 날짜 생성 및 YYYY-MM-DD 형식 변환
  //   const currentDate = new Date().toISOString().split('T')[0];

  //   // 데이터 객체 state에 date 값에 넣어준다
  //   setMemoFormData(prevData => ({
  //     ...prevData,
  //     date: currentDate,
  //   }));
  // }, []);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : Form 데이터 객체 수정 (keyof interface는 interface의 key 값만 넣을 수 있는 타입)
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
        />
        <MemoFormTool />
      </View>
      <View style={styles.formDateBlock}>
        <Text style={styles.formDateText}>{memoFormData.date}</Text>
      </View>
      <View style={styles.formContentsBlock}>
        <TextInput
          style={styles.formContentsText}
          placeholder="내용을 입력해주세요"
          value={memoFormData.contents}
          onChangeText={text => handleMemoFormData('contents', text)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  memoFormWrapper: {
    flex: 1,
    backgroundColor: '#c22a2a',
    paddingHorizontal: 10,
  },

  memoFormContainer: {
    flexGrow: 1,
  },

  formTitleBlock: {
    ...globalDisplay.betweenRow,
    width: '100%',
    height: 50,
    backgroundColor: '#d38715',
  },

  formTitleText: {
    fontSize: 20,
  },

  formToolBlock: {
    width: '40%',
    height: '100%',
    backgroundColor: '#20c2db',
  },

  formDateBlock: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: 30,
    backgroundColor: '#e3d513',
  },

  formDateText: {
    fontSize: 15,
  },

  formContentsBlock: {
    flex: 1,
    width: '100%',
    backgroundColor: '#77d215',
  },

  formContentsText: {
    fontSize: 18,
  },
});

export default MemoForm;
