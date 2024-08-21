import {StyleSheet, View} from 'react-native';
import {globalDisplay} from '../../assets/styles/global/globalDisplay';

const TheHeader = () => {
  return <View style={styles.headerWrapper}></View>;
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...globalDisplay.centerRow,
    height: 80,
    backgroundColor: '#000000',
  },
});

export default TheHeader;
