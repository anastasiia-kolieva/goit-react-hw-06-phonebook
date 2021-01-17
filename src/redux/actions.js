import { createAction } from '@reduxjs/toolkit';
import actionTypes from './types';

const handelDeleteContact = createAction(actionTypes.handelDeleteContact);

// const handelDeleteContact = contactId => {
//   return {
//     type: actionTypes.handelDeleteContact,
//     payload: contactId,
//   };
// };

const contactFormSubmithandler = createAction(
  actionTypes.contactFormSubmithandler,
);

// const contactFormSubmithandler = newContact => {
//   return {
//     type: actionTypes.contactFormSubmithandler,
//     payload: newContact,
//   };
// };

const changeFilter = createAction(actionTypes.changeFilter);

// export const changeFilter = value => {
//   return {
//     type: actionTypes.changeFilter,
//     payload: value,
//   };
// };

export { handelDeleteContact, contactFormSubmithandler, changeFilter };
