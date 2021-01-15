// action creator
// export const myAction = value => {
//   return {
//     type: 'MY_ACTION',
//     payload: value,
//   };
// };

export const handelDeleteContact = value => {
  return {
    type: 'phonebook/handelDeleteContact',
    payload: value,
  };
};

export const contactFormSubmithandler = value => {
  return {
    type: 'phonebook/contactFormSubmithandler',
    payload: value,
  };
};
