import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Stat from './stat.jsx';

// Simple React Component to render at startup
export default class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  getPlayerStats() {
    // NOTE: For now returning JSON
    // In real case, we will be returning reactive data from collection
    return [
      {
        name: 'Virat',
        dob: '2/09/1988',
        height: 178,
        role: 'Captain/Batsman',
        battingStyle: 'Right Arm',
        bowlingStyle: 'Right-arm Medium',
        iplTeam: 'Royal Challangers',
        seasonsPlayed: 10,
        numOf50s: 2,
        numOf100s: 0,
        upvoteCount: 10,
        downvoteCount: 0
      }
    ];
  }

  renderStats() {
    return this.getPlayerStats().map((stat) => (
      <Stat name={stat.name}
            dob={stat.dob}
            height={stat.height}
            role={stat.role}
            battingStyle={stat.battingStyle}
            bowlingStyle={stat.bowlingStyle}
            iplTeam={stat.iplTeam}
            seasonsPlayed={stat.seasonsPlayed}
            numOf50s={stat.numOf50s}
            numOf100s={stat.numOf100s}
            upvoteCount={stat.upvoteCount}
            downvoteCount={stat.downvoteCount} />
    ));
  }

  addPlayerPage() {
    return FlowRouter.go('/add-player')
  }

  render() {
    return (
      <div className="container">
        <div className="pull-right">
          <button type="button" className="btn btn-primary" name="add-player" onClick={this.addPlayerPage}>Add a new Player</button>
        </div>

        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Height</th>
              <th>Role</th>
              <th>Batting Style</th>
              <th>Bowling Style</th>
              <th>IPL Team</th>
              <th>Seasons Played</th>
              <th>50s</th>
              <th>100s</th>
              <th>Upvote</th>
              <th>Downvote</th>
            </tr>
          </thead>
          <tbody>
              {this.renderStats()}
          </tbody>
        </table>
      </div>
    );
  }
}
