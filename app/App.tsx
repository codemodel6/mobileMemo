import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TheHeader from './components/organism/TheHeader';
import MemoList from './page/MemoListPage';
import MemoForm from './components/memo/MemoForm';
import {Provider} from 'react-redux';
import store from './redux/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <TheHeader />
        {/* <MemoList /> */}
        <MemoForm />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
