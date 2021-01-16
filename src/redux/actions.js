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

export const changeFilter = value => {
  return {
    type: 'phonebook/changeFilter',
    payload: value,
  };
};
