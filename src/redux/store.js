import { combineReducers } from 'redux';
import {
  configureStore,
  createReducer,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import actionTypes from './types';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const ContactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const itemsReducer = createReducer([], {
  // это строка потому вычисляемое свойство объекта
  [actionTypes.handelDeleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [actionTypes.contactFormSubmithandler]: (state, action) => [
    ...state,
    action.payload,
  ],
});

const filterReducer = createReducer('', {
  [actionTypes.changeFilter]: (_, action) => action.payload,
});

const contactReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: {
    contacts: persistReducer(ContactsPersistConfig, contactReducer),
  },
  middleware,
});

const persistor = persistStore(store);

const contactStore = { store, persistor };

export default contactStore;

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.handelDeleteContact:
//       // проверить contact.id !== action.payload
//       return state.filter(contact => contact.id !== payload);

//     case actionTypes.contactFormSubmithandler:
//       return [...state, payload];

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.changeFilter:
//       return payload;

//     default:
//       return state;
//   }
// };
