import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // TODO
  }

  componentWillReceiveProps({ loading, children }) {
    // TODO
  }

  render() {
    const name = 'Meteor Noida';

    return (
      <div id="container">
        {name}
      </div>
    );
  }
}
