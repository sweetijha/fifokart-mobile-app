import React, {Fragment} from 'react';
import Route from './src/routes';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Route />
    </Fragment>
  );
};

export default App;
