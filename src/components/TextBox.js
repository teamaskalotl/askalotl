import React, { Component } from 'react';

const TextBox = (props) => {
    const renderWisdom = () => {
        if (props.wisdomStatus == 'fetched') {
        return <TextBox wisdom={wisdom} />;
        } else return <h1>Awaiting your command</h1>;
      }
  return (
    <div>
      <h1>{renderWisdom()}</h1>
    </div>
  );
};

export default TextBox;
