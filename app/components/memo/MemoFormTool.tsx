import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';

const MemoFormTool = () => {
  return (
    <View style={styles.MemoFormToolWrppaer}>
      <TouchableOpacity style={styles.toolButton}>
        <Text style={styles.toolButtonText}>편집</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.toolButton}>
        <Text style={styles.toolButtonText}>삭제</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MemoFormToolWrppaer: {
    //...globalDisplay.aroundRow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '40%',
    height: '100%',
    backgroundColor: '#20c2db',
  },

  toolButton: {
    ...globalDisplay.centerRow,
    width: 40,
    height: 40,
    backgroundColor: '#db20d2',
  },

  toolButtonText: {
    fontSize: 18,
  },
});
export default MemoFormTool;
