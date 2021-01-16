import { createStore } from 'redux';

// Пусть Redux-состояние выглядит следующим образом.

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const initialStore = { contacts: [] };

// принимает предыдущее состояние и действие. Возвращает след.состояние
const reducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case 'phonebook/handelDeleteContact':
      // проверить contact.id !== action.payload
      return state.contacts.filter(contact => contact.id !== payload);

    case 'phonebook/contactFormSubmithandler':
      return { contacts: [...state, payload] };

    // case 'phonebook/changeFilter':
    //   return { contacts: [...state, payload] };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
