import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';

const MemoItem = () => {
  return (
    <View style={styles.memoItemWrapper}>
      <View style={styles.itemDataBlock}>
        <View style={styles.itemInfoBlock}>
          <Text style={styles.itemTitleText}>제목</Text>
          <Text style={styles.itemDateText}>2024-08-21</Text>
        </View>
        <View style={styles.itemContentsBlock}>
          <Text style={styles.itemContents}>내용</Text>
        </View>
      </View>
      <View style={styles.itememoDeleteBlock}>
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

  itemDataBlock: {
    height: '100%',
    width: '90%',
  },

  itemInfoBlock: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: '#124124',
  },

  itemTitleText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10,
  },
  itemDateText: {
    fontSize: 15,
  },

  itemContentsBlock: {
    flex: 1,
    paddingTop: '1%',
    width: '100%',
    backgroundColor: '#288096',
  },

  itemContents: {
    fontSize: 18,
  },

  itememoDeleteBlock: {
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
