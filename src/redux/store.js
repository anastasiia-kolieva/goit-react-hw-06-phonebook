import { createStore } from 'redux';

// принимает предыдущее состояние и действие. Возвращает след.состояние
const reducer = (state = {}, action) => {
  console.log(action);
  return state;
};

const store = createStore(reducer);

export default store;
