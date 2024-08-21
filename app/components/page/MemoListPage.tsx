import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';

const MemoListPage = () => {
  return (
    <ScrollView
      style={styles.memoListPageWrapper}
      contentContainerStyle={styles.memoListPageDisplay}>
      <View />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  memoListPageWrapper: {
    flex: 1,
    backgroundColor: '#412452',
  },
  memoListPageDisplay: {
    ...globalDisplay.betweenRow,
  },
});

export default MemoListPage;
