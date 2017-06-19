import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Stat from './stat.jsx';

// Simple React Component to render at startup
export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerData: [
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
      ]
    }
  }

  componentWillMount() {
    console.log("component Wiil mount");
    this.setState({
      playerData: this.state.playerData.concat({
        name: 'Mahendra',
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

  componentDidMount() {
    console.log("component Did mount");
    // this.setState({
    //   playerData: this.state.playerData.concat({
    //     name: 'Sehwag',
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

  shouldComponentUpdate() {
    console.log("Inside should Component Update");
    return true;
  }

  componentWillReceiveProps(nextProps) {
    console.log("Inside component will receive props");
  }

  componentWillUpdate() {
    console.log("Component Will Update");
    // this.setState({
    //   playerData: this.state.playerData.concat({
    //     name: 'Sachin',
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

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  renderStats() {
    return this.state.playerData.map((stat) => (
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
    // this.setState({
    //   addPlayer: true
    // });
    // const { playerData } = this.state;
    // playerData[0].name = "Mukul";
    // this.setState({
    //   playerData: playerData
    // });

    // this.forceUpdate();

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
    // if(this.state.addPlayer) {
    //   return (
    //     <div className="container">
    //   	  <form id='addPlayerInfo' onSubmit = { e => this.submitForm(e) }>
    //         <div className="row">
    //           <div className="form-group col-lg-4">
    //             <label for="name">Name</label>
    //   			    <input type="text"
    //                className="form-control"
    //                id="name"
    //                name="name"
    //                ref = { input => this.name = input  }
    //                placeholder="Enter Name" required />
    //           </div>
    //         </div>
    //
    //     		<div className="form-group col-lg-4 ">
    //     		  <input type="submit" className="form-control btn-primary" id="submit" value="Submit" />
    //         </div>
    //       </form>
    //     </div>
    //   );
    // }

    return (
      <div className="container">
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
