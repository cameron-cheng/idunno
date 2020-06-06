import React from 'react';
import { Provider } from 'react-native-paper';
import { theme } from '../core/theme.js';

const Login = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Login;