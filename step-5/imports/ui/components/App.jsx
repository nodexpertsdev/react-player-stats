import React from 'react';
import { Meteor } from 'meteor/meteor';

// Simple React Component to render at startup
export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div class="app-root">
        <div class="container">
          {this.props.yield}
        </div>
      </div>
    );
  }
}
