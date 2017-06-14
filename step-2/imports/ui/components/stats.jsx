import React from 'react';
import { Meteor } from 'meteor/meteor';

// Simple React Component to render at startup
export default class Stats extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <h1>Stats Component</h1>
    );
  }
}
