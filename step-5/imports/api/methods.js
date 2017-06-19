import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const PlayerStats = new Mongo.Collection('playerstats');


Meteor.methods({
  addPlayer: (data) => {
    PlayerStats.insert(data);

    return {
      status: "ok",
      message: "Data inserted successfully"
    };
  }
})
