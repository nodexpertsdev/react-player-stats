import { Meteor } from 'meteor/meteor';

// import collection
import { PlayerStats } from '../db/collection.js';

// publishing playerstats collection
Meteor.publish('players.list', function() {
  return PlayerStats.find({});
});
