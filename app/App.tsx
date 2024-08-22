import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TheHeader from './components/organism/TheHeader';
import MemoListPage from './page/MemoListPage';
import {Provider} from 'react-redux';
import store from './redux/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MemoForm from './components/memo/MemoForm';
import {RootStackParamList} from './navigation/type';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MemoListPage"
              component={MemoListPage}
              options={{header: () => <TheHeader />}}
            />
            <Stack.Screen
              name="MemoForm"
              component={MemoForm}
              options={{header: () => <TheHeader />}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
