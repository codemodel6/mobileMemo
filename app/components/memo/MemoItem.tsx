import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';

const MemoItem = () => {
  return (
    <View style={styles.memoItemWrapper}>
      <View style={styles.itemDataWrapper}>
        <View style={styles.itemInfoWrapper}>
          <Text style={styles.itemTitle}>제목</Text>
          <Text style={styles.itemDate}>2024-08-21</Text>
        </View>
        <View style={styles.memoItemContents}>
          <Text style={styles.itemContents}>내용</Text>
        </View>
      </View>
      <View style={styles.memoDeleteWrapper}>
        <TouchableOpacity style={styles.itemDeleteButton}>
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
    backgroundColor: '#d1fd0a',
    paddingTop: '5%',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },

  itemDataWrapper: {
    height: '100%',
    width: '90%',
  },

  itemInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: '#124124',
  },

  itemTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10,
  },
  itemDate: {
    fontSize: 15,
  },

  memoItemContents: {
    flex: 1,
    paddingTop: '1%',
    width: '100%',
    backgroundColor: '#288096',
  },

  itemContents: {
    fontSize: 18,
  },

  memoDeleteWrapper: {
    height: '100%',
    width: '10%',
    backgroundColor: '#b33636',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemDeleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: 23,
    height: 23,
  },

  itemDeleteButtonText: {
    fontSize: 15,
    color: '#000000',
  },
});

export default MemoItem;
