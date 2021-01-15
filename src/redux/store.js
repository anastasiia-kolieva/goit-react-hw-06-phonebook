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
const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'phonebook/handelDeleteContact':
      // проверить contact.id !== action.payload
      return state.contacts.filter(contact => contact.id !== action.payload);

    case 'phonebook/contactFormSubmithandler':
      return { contacts: [...state, action.payload] };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
