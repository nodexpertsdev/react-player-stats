import { Meteor } from 'meteor/meteor';

// import collection
import { PlayerStats } from '../db/collection.js';

Meteor.methods({
  addPlayer: (data) => {
    PlayerStats.insert(data);

    return {
      status: "ok",
      message: "Data inserted successfully"
    };
  }
})
