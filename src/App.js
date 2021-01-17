import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
// import useLocalStorage from './hooks/useLocalStorage';
// import * as actions from './redux/actions';

const stylesForWrapper = {
  width: '500px',
  margin: '0 auto',
  paddingTop: '30px',
};

const stylesForTitles = {
  textAlign: 'center',
  color: '#6B5EAC',
};

function App({
  contacts,
  // filter,
  // handelDeleteContact,
  // contactFormSubmithandler,
  // changeFilter,
}) {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  // const handelDeleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // const contactFormSubmithandler = newContact => {
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };

  const handelCheckUniqueContact = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);
    isExistContact && alert('Contact is already exist!');
    return !isExistContact;
  };

  // const changeFilter = event => {
  //   setFilter(event.target.value);
  // };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  return (
    <div style={{ ...stylesForWrapper }}>
      <h1 style={{ ...stylesForTitles }}>Phonebook</h1>

      <ContactForm
        // onSubmitData={contactFormSubmithandler}
        onCheckUnique={handelCheckUniqueContact}
      />

      <h2 style={{ ...stylesForTitles }}>Contacts</h2>

      <Filter
      // value={filter} onChange={changeFilter}
      />

      <ContactList
      // contacts={getFilteredContacts()}
      // onDeleteContact={handelDeleteContact}
      />
    </div>
  );
}

// получает всё состояние приложения, возвращает обьект, что полижим свойствами возвращаемого
// обьекта, то и будет пропсами компонента
const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    // filter: state.contacts.filter,
  };
};

// метод который доставляет методы до хранилища
// const mapDispatchToProps = dispatch => {
//   return {
// handelDeleteContact: () => dispatch(actions.handelDeleteContact()),
// contactFormSubmithandler: () =>
//   dispatch(actions.contactFormSubmithandler()),
// changeFilter: () => dispatch(actions.changeFilter()),
//   };
// };

export default connect(mapStateToProps, null)(App);

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   // изменить стостояние от предыдущего
//   handelDeleteContact = contactId => {
//     this.setState(prevState => ({
//       // беру все предыдущие контакты.Для каждого из них проверяю
//       // по id(сравниваю с id контакта, который нужно удалить)
//       // отфильтровывыю только те, id которых не равен id, контакта который нужно удалить
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   // Получение данных state.name и state.number c ContactForm
//   // добавление нового контакта
//   contactFormSubmithandler = newContact => {
//     this.setState(prevContact => ({
//       contacts: [...prevContact.contacts, newContact],
//     }));
//   };

//   handelCheckUniqueContact = name => {
//     const { contacts } = this.state;
//     // по контанктам проходим и на каждой итераци сравниваем имена существующие
//     // в списке контактов с тем , которое приходит с формы
//     // двойное НЕ используют для преобразования значений к логическому типу
//     const isExistContact = !!contacts.find(contact => contact.name === name);

//     //  alert сработает, если в левой части (isExistContact) будет  равен true(если
//     // найдёться уже существующий контакт в списке)
//     isExistContact && alert('Contact is already exist!');

//     // функция возвращает ответ "уникальный ли контакт или нет?" Если пришло isExistContact=true(существует контакт),
//     // функция возвращает: "контакт НЕ уникальный"
//     return !isExistContact;
//   };

//   // Filter
//   changeFilter = event => {
//     this.setState({ filter: event.target.value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     // возвращаем те контакты, свойсто имени которых включает значение из this.state.filter
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   componentDidMount() {
//     // взять контакты с предыдущей сессии, хранящиеся в localStorage
//     const prevContacts = localStorage.getItem('contacts');
//     // запарсить массив
//     const parsedContacts = JSON.parse(prevContacts);

//     // если в localStorage уже есть контакты, тогда их записываем в state.
//     // если контакты=пустой массив(null), тогда ничего не записывается
//     if (parsedContacts) {
//       // записать в state предыдущие контакты
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // если текущий контакт в state НЕ равен предыдущему контакту в state
//     // проверяем обновился ли массив контактов
//     if (this.state.contacts !== prevState.contacts) {
//       // записываем в localStorage массив contacts обьектов ({id,name,number})
//       // при каждом обновлении контакта, перезаписываем массив контактов
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;
//     // переменная для отрисовки отфильтрованных контактов
//     const filteredContacts = this.getFilteredContacts();
//     return (
//       <div style={{ ...stylesForWrapper }}>
//         <h1 style={{ ...stylesForTitles }}>Phonebook</h1>

//         <ContactForm
//           onSubmitData={this.contactFormSubmithandler}
//           onCheckUnique={this.handelCheckUniqueContact}
//         />

//         <h2 style={{ ...stylesForTitles }}>Contacts</h2>

//         <Filter value={filter} onChange={this.changeFilter} />

//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={this.handelDeleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
