import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'ress';
import 'font-awesome/css/font-awesome.min.css'; 
import * as serviceWorker from 'serviceWorker';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import 'index.css';
import App from 'routes';
import configureStore from "store";

const reduxStore = configureStore();

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

firebase.initializeApp({
  apiKey: "AIzaSyDTqCF8lD4ES87laFS3ao24sOOQusnTDFs",
  authDomain: "art-criticism.firebaseapp.com",
  databaseURL: "https://art-criticism.firebaseio.com",
  projectId: "art-criticism",
  storageBucket: "art-criticism.appspot.com",
  messagingSenderId: "640687909433",
  appId: "1:640687909433:web:8a4c658f5b33efffff7be8",
  measurementId: "G-SFFEHKKMN4"
});
