import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';
import MemoFormTool from './MemoFormTool';

const MemoForm = () => {
  return (
    <ScrollView
      style={styles.memoFormWrapper}
      contentContainerStyle={styles.memoFormContainer}>
      <View style={styles.formTitleWrapper}>
        <Text style={styles.formTitleText}>제목</Text>
        <MemoFormTool />
      </View>
      <View style={styles.formDateWrapper}>
        <Text style={styles.formDateText}>2024-08-22</Text>
      </View>
      <View style={styles.formContentsWrapper}>
        <Text style={styles.formContentsText}>2024-08-22</Text>
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

  formTitleWrapper: {
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

  formDateWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: 30,
    backgroundColor: '#e3d513',
  },

  formDateText: {
    fontSize: 15,
  },

  formContentsWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: '#77d215',
  },

  formContentsText: {
    fontSize: 18,
  },
});

export default MemoForm;
