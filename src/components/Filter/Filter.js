import React from 'react';
import { connect } from 'react-redux';
import s from '../Filter/Filter.module.css';
import * as actions from '../../redux/actions';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <h2 className={s.filter_title}>Find contacts by name</h2>
      <input
        type="text"
        placeholder="Enter contact name"
        className={s.filter_input}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

const mapStateToProps = state => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: event => dispatch(actions.changeFilter(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
