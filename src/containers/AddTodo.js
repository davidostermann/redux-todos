import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

let Comp = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

const AddTodo = connect()(Comp);

export default AddTodo;
