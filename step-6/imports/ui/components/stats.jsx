import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';

// import collection
import { PlayerStats } from '../../db/collection.js';

import Stat from './stat.jsx';

// Simple React Component to render at startup
export class Stats extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   playerData: [
    //     {
    //       name: 'Virat',
    //       dob: '2/09/1988',
    //       height: 178,
    //       role: 'Captain/Batsman',
    //       battingStyle: 'Right Arm',
    //       bowlingStyle: 'Right-arm Medium',
    //       iplTeam: 'Royal Challangers',
    //       seasonsPlayed: 10,
    //       numOf50s: 2,
    //       numOf100s: 0,
    //       upvoteCount: 10,
    //       downvoteCount: 0
    //     }
    //   ]
    // }
  }

  componentWillMount() {
    console.log("component Wiil mount");
    // this.setState({
    //   playerData: this.state.playerData.concat({
    //     name: 'Mahendra',
    //     dob: '2/09/1988',
    //     height: 178,
    //     role: 'Captain/Batsman',
    //     battingStyle: 'Right Arm',
    //     bowlingStyle: 'Right-arm Medium',
    //     iplTeam: 'Royal Challangers',
    //     seasonsPlayed: 10,
    //     numOf50s: 2,
    //     numOf100s: 0,
    //     upvoteCount: 10,
    //     downvoteCount: 0
    //   })
    // });
  }

  componentDidMount() {
    console.log("component Did mount");
  }

  shouldComponentUpdate() {
    console.log("Inside should Component Update");
    return true;
  }

  componentWillReceiveProps(nextProps) {
    console.log("Inside component will receive props");
  }

  componentWillUpdate() {
    console.log("Component Will Update");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  renderStats() {
    // console.log('data', this.props.data);

    // return this.state.playerData.map((stat, index) => (
    return this.props.data.map((stat, index) => (
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
            key={index} />
    ));
  }

  addPlayerPage() {
    FlowRouter.go('/add-player')
  }

  submitForm(e) {
    e.preventDefault();
    console.log("The Name is ", this.name.value);
    this.setState({
      addPlayer: false,
      playerData: this.state.playerData.concat({
        name: this.name.value,
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
      })
    });
  }

  render() {
    return (
      <div className="well">
        <div className="pull-right">
          <button type="button" className="btn btn-primary" name="add-player" onClick={ this.addPlayerPage.bind(this) }>Add a new Player</button>
        </div>

        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Height</th>
              <th>IPL Team</th>
              <th>Seasons Played</th>
              <th>50s</th>
              <th>100s</th>
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

export default createContainer(() => {
  Meteor.subscribe('players.list');

  const data = PlayerStats.find({}).fetch();

  return {
    // pass props from here, to SomeComponent
    data: data
  }
}, Stats);
