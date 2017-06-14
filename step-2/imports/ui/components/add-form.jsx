import React from 'react';
import { Meteor } from 'meteor/meteor';

// Simple React Component to render at startup
export default class AddForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <h1>Add form Component</h1>
    );
  }
}
