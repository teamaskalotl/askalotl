import React, { Component } from 'react';

const TextBox = (props) => {
        if (props.wisdomStatus == 'fetched') {
        return  <h1>{props.wisdom} </h1>
        } else return <h1>Awaiting your command</h1>;
      }

export default TextBox;
