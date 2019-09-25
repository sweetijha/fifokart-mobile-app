import React, {useReducer} from 'react';
import {reducer, initialState} from '../reducer/user';
import {LOGIN} from '../constant';
import {login} from '../api/user';
import {AsyncStorage} from 'react-native';

export const userLogin = data => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await login(data);
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
