/* global document */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import App from '../imports/ui/components/App.jsx';

// Render simple react component at startup
Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
