import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactLayout } from 'meteor/kadira:react-layout';

import App from '../imports/ui/components/App.jsx';
import Stats from '../imports/ui/components/stats.jsx';
import AddForm from '../imports/ui/components/add-form.jsx';

FlowRouter.route( '/', {
  name: 'home',
  action() {
    ReactLayout.render( App, { yield: <Stats /> } );
  }
});

FlowRouter.route( '/stats', {
  name: 'stats',
  action() {
    ReactLayout.render( App, { yield: <Stats /> } );
  }
});


FlowRouter.route( '/add-player', {
  name: 'add-player',
  action() {
    ReactLayout.render( App, { yield: <AddForm /> } );
  }
});
