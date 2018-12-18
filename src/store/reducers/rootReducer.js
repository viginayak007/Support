import authReducer from './authReducer';
import ticketReducer from './ticketReducer';
import adminReducer from  './adminReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  tickets: ticketReducer,
  admin: adminReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
