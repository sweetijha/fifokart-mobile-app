import React, {Fragment} from 'react';
import Route from './src/routes';
import {StatusBar} from 'react-native';
import navController from './src/controllers/navController';

const App = () => {
  console.disableYellowBox = true;
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Route
        ref={navigatorRef => {
          navController.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Fragment>
  );
};

export default App;
