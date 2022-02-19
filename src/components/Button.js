import React, { Component } from 'react';

const Button = (props) => {
  return (
    <div>
      <button className='askButton' onClick={() => props.fetchWisdom()}>
        Give me sage advice...
      </button>
    </div>
  );
};

export default Button;
