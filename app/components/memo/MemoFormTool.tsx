import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';

interface FormToolProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const MemoFormTool: React.FC<FormToolProps> = ({toggle, setToggle}) => {
  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 읽기/수정 을 결정하는 toggle 변경
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <View style={styles.MemoFormToolWrppaer}>
      {toggle ? (
        <View style={styles.MemoFormToolBlock}>
          <TouchableOpacity style={styles.toolButton} onPress={handleToggle}>
            <Text style={styles.toolButtonText}>편집</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Text style={styles.toolButtonText}>삭제</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.MemoFormToolBlock}>
          <TouchableOpacity style={styles.toolButton} onPress={handleToggle}>
            <Text style={styles.toolButtonText}>수정</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Text style={styles.toolButtonText}>취소</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  MemoFormToolWrppaer: {
    width: '40%',
    height: '100%',
    backgroundColor: '#20c2db',
  },

  MemoFormToolBlock: {
    ...globalDisplay.aroundRow,
    width: '100%',
    height: '100%',
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
