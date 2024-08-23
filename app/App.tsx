import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import MemoForm from './components/memo/MemoForm';
import TheHeader from './components/organism/TheHeader';
import {RootStackParamList} from './navigation/type';
import MemoListPage from './page/MemoListPage';
import store from './redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{header: () => <TheHeader />}}>
            <Stack.Screen name="MemoListPage" component={MemoListPage} />
            <Stack.Screen name="MemoForm" component={MemoForm} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
export default App;
