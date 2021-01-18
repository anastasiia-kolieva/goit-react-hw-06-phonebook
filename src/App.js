import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const stylesForWrapper = {
  width: '500px',
  margin: '0 auto',
  paddingTop: '30px',
};

const stylesForTitles = {
  textAlign: 'center',
  color: '#6B5EAC',
};

function App({ contacts }) {
  const handelCheckUniqueContact = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);
    isExistContact && alert('Contact is already exist!');
    return !isExistContact;
  };

  return (
    <div style={{ ...stylesForWrapper }}>
      <h1 style={{ ...stylesForTitles }}>Phonebook</h1>

      <ContactForm onCheckUnique={handelCheckUniqueContact} />

      <h2 style={{ ...stylesForTitles }}>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
}

// получает всё состояние приложения, возвращает обьект, что полижим свойствами возвращаемого
// обьекта, то и будет пропсами компонента
const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps, null)(App);
