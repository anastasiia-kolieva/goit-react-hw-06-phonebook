import actionTypes from './types';

export const handelDeleteContact = contactId => {
  return {
    type: actionTypes.handelDeleteContact,
    payload: contactId,
  };
};

export const contactFormSubmithandler = newContact => {
  return {
    type: actionTypes.contactFormSubmithandler,
    payload: newContact,
  };
};

export const changeFilter = value => {
  return {
    type: actionTypes.changeFilter,
    payload: value,
  };
};
