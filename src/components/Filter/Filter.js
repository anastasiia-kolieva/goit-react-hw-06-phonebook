import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from '../Filter/Filter.module.css';
import * as actions from '../../redux/actions';

export default function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className={s.filter_title}>Find contacts by name</h2>
      <input
        type="text"
        placeholder="Enter contact name"
        className={s.filter_input}
        value={value}
        onChange={event => dispatch(actions.changeFilter(event.target.value))}
      ></input>
    </>
  );
}

// const mapStateToProps = state => {
//   return {
//     value: state.contacts.filter,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onChange: event => dispatch(actions.changeFilter(event.target.value)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
