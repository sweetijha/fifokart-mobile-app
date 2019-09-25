import {LOGIN, GET_LOGIN} from '../constant';
import {AsyncStorage} from 'react-native';

export let initialState = {loginData: null};
AsyncStorage.getItem('loginData')
  .then(value => {
    initialState.loginData = JSON.parse(value);
  })
  .then(res => {
    initialState.loginData = null;
  });

export function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return {...state};
    case GET_LOGIN:
      return {...state};
    default:
      throw new Error();
  }
}
