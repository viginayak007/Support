import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebaseConfig from './config/firebaseConfig';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), //binding thunk with firestore and firebase
        reactReduxFirebase(firebaseConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),// redux binding for firebase
        reduxFirestore(firebaseConfig)   // redux binding for firebase
    ) 
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})

