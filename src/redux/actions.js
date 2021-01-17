import actionTypes from './types';

export const handelDeleteContact = value => {
  return {
    type: actionTypes.handelDeleteContact,
    payload: value,
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
