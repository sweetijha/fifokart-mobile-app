import React from 'react';
import {USER_API} from './config';
import {AsyncStorage} from 'react-native';
export function login(data) {
  return new Promise((resolve, reject) => {
    try {
      fetch(USER_API + '/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })
        .then(response => {
          response.json().then(res => {
            if (res.success) {
              AsyncStorage.setItem('loginData', JSON.stringify(res.data));
              resolve(res.data);
            }
            reject(res);
          });
        })
        .catch(error => {
          reject(error);
        });
    } catch (e) {
      resolve(JSON.stringify(e));
    }
  });
}
