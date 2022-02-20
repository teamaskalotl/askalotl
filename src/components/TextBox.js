import React, { Component } from 'react';

const TextBox = (props) => {
    const renderWisdom = () => {
        if (props.wisdomStatus == 'fetched') {
        return <TextBox wisdom={wisdom} />;
        } else return <h1>Awaiting your command</h1>;
      }
  return (
    <div>
      {renderWisdom()}
    </div>
  );
};

export default TextBox;
