import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import actionTypes from './types';

// Пусть Redux-состояние выглядит следующим образом.
// const initialStore = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

const itemsReducer = createReducer([], {
  // это строка потому вычисляемое свойство объекта
  [actionTypes.handelDeleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [actionTypes.contactFormSubmithandler]: (state, action) => [
    ...state,
    action.payload,
  ],
});

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

const filterReducer = createReducer('', {
  [actionTypes.changeFilter]: (state, action) => action.payload,
});

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.changeFilter:
//       return payload;

//     default:
//       return state;
//   }
// };

const contactReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// const rootReducers = combineReducers({
//   contacts: contactReducer,
// });

// const store = createStore(rootReducers, composeWithDevTools());

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;

// принимает предыдущее состояние и действие. Возвращает след.состояние
// const reducer = (state = initialStore, { type, payload }) => {
//     switch (type) {
//       case 'phonebook/handelDeleteContact':
//         // проверить contact.id !== action.payload
//         return state.contacts.items.filter(contact => contact.id !== payload);

//       case 'phonebook/contactFormSubmithandler':
//         return {
//           ...state,
//           contacts: {
//             ...state.contacts,
//             items: state.contacts.items,
//             payload,
//           },
//         };
//       //   { contacts: [...state, payload] };

//       case 'phonebook/changeFilter':
//         return {
//           ...state,
//           contacts: {
//             ...state.contacts,
//             filter: state.contacts.filter,
//             payload,
//           },
//         };

//       default:
//         return state;
//     }
//   };
