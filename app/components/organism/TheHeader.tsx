import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';

const TheHeader = () => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity style={styles.headerBackButton}>
        <Text style={styles.headerBackButtonText}>뒤</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>안녕하세요</Text>
      <TouchableOpacity style={styles.headerSearchButton}>
        <Text style={styles.headerSearchButtonText}>돋</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...globalDisplay.betweenRow,
    height: 70,
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingTop: 10, // 상태바 고려 설정
  },
  headerBackButton: {
    ...globalDisplay.centerColumn,
    backgroundColor: '#ffffff',
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerBackButtonText: {
    ...globalDisplay.centerRow,
    fontSize: 15,
    color: '#000000',
  },
  headerTitle: {
    fontSize: 20,
    color: '#ffffff',
  },
  headerSearchButton: {
    ...globalDisplay.centerColumn,
    backgroundColor: '#ffffff',
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerSearchButtonText: {
    ...globalDisplay.centerRow,
    fontSize: 15,
    color: '#000000',
  },
});

export default TheHeader;
