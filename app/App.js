import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import getTheme from './theme/components';
import theme from './theme';
import { Container, Root, StyleProvider } from 'native-base';
import { StatusBar } from 'react-native';
import { RootNavigator } from './navigation/RootNavigator';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    console.log('reached here');
    RNBootSplash.hide().catch(err => console.log(err));
  });

  return (
    <Root>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StyleProvider style={getTheme(theme.dark)}>
            <Container>
              <StatusBar barStyle="dark-content" />
              <RootNavigator />
            </Container>
          </StyleProvider>
        </PersistGate>
      </Provider>
    </Root>
  );
};

export default App;
