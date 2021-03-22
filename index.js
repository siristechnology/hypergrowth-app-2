if (__DEV__) {
  import('./app/config/reactotronConfig');
}
import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

console.log('inside here');

AppRegistry.registerComponent(appName, () => App);
