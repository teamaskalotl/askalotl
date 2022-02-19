import React, { Component } from 'react';

const Button = (props) => {
  return (
    <div>
      <button onClick={() => props.fetchWisdom()}>
        Give me sage advice...
      </button>
    </div>
  );
};

export default Button;
