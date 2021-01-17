import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionTypes from './types';

// Пусть Redux-состояние выглядит следующим образом.
// const initialStore = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.handelDeleteContact:
      // проверить contact.id !== action.payload
      return state.filter(contact => contact.id !== payload);

    case actionTypes.contactFormSubmithandler:
      return [...state, payload];

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.changeFilter:
      return payload;

    default:
      return state;
  }
};

const contactReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReducers = combineReducers({
  contacts: contactReducer,
});

const store = createStore(rootReducers, composeWithDevTools());

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
