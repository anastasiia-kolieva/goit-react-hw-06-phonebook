import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from '../ContactList/ContactList.module.css';
import * as actions from '../../redux/actions';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={s.li}>
          {contact.name}: {contact.number}
          <button
            className={s.button}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }),
  ),
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: filteredContacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: contactId =>
      dispatch(actions.handelDeleteContact(contactId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
