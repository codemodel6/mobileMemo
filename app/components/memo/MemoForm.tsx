import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import MemoFormTool from './MemoFormTool';

const MemoForm = () => {
  return (
    <ScrollView
      style={styles.memoFormWrapper}
      contentContainerStyle={styles.memoFormContainer}>
      <View style={styles.formTitleBlock}>
        <Text style={styles.formTitleText}>제목</Text>
        <MemoFormTool />
      </View>
      <View style={styles.formDateBlock}>
        <Text style={styles.formDateText}>2024-08-22</Text>
      </View>
      <View style={styles.formContentsBlock}>
        <Text style={styles.formContentsText}>내용 없음</Text>
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
