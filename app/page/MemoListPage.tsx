import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import MemoItem from '../components/memo/MemoItem';

const MemoListPage = () => {
  return (
    <ScrollView
      style={styles.memoListPageWrapper}
      contentContainerStyle={styles.memoListPageDisplay}>
      <MemoItem />
      <MemoItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  memoListPageWrapper: {
    flex: 1,
    backgroundColor: '#ca3623',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  memoListPageDisplay: {
    flexDirection: 'column',
  },
});

export default MemoListPage;
