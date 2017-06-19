import React from 'react';
import { Meteor } from 'meteor/meteor';

// Simple React Component to render at startup
export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log("Inside submit form");
    let formData = {};
    const keys = ["name", "dob", "height", "iplTeam", "seasonsPlayed", "numOf50s", "numOf100s", "totalRuns", "totalBalls"];
    keys.map(key => formData[key] = this[key].value);

    Meteor.call('addPlayer', formData, (err, res) => {
      if(err) {
        console.log(err);
      } else {
        console.log(res);
        FlowRouter.go('/');
      }
    })
  }

  render() {
    return (
      <div className="container">
    	  <form id='addPlayerInfo' onSubmit={this.submitForm}>
          <div className="row">
            <div className="form-group col-lg-4">
              <label for="name">Name</label>
    			    <input type="text"
                     className="form-control"
                     id="name"
                     name="name"
                     ref={input => this.name = input}
                     placeholder="Enter Name" required />
            </div>
            <div className="form-group col-lg-4">
      			    <label for="dob">Date Of Birth</label>
      			    <input type="date"
                       className="form-control"
                       id="dob"
                       name="dob"
                       ref={input => this.dob = input}
                       placeholder="Enter DOB" required />
      			</div>
      			<div className="form-group col-lg-4">
      			    <label for="height">Height(cm)</label>
      			    <input type="number"
                       className="form-control"
                       id="height"
                       name="height"
                       ref={input => this.height = input}
                       placeholder="Enter Height" required />
      			</div>
          </div>

          <div className="row">
      			<div className="form-group col-lg-4">
      			    <label for="iplTeam">IPL Team</label>
      			    <input type="text" className="form-control"
                       ref={input => this.iplTeam = input}
                       id="iplTeam" name="iplTeam"  placeholder="Enter IPL Team" required />
      			</div>
      			<div className="form-group col-lg-4">
      			    <label for="seasonsPlayed">Seasons Played</label>
      			    <input type="number" className="form-control" id="seasonsPlayed" name="seasonsPlayed"
                       ref={input => this.seasonsPlayed = input}
                       placeholder="Enter Seasons Played" required />
      			</div>
      		    <div className="form-group col-lg-4">
      			    <label for="numOf50s">Number of 50s</label>
      			    <input type="number" className="form-control" id="numOf50s" name="numOf50s"
                       ref={input => this.numOf50s = input}
                       placeholder="Enter Number of 50s" required />
      			</div>
      		</div>
      		<div className="row">
      			<div className="form-group col-lg-4">
      			    <label for="numOf100s">No of 100s</label>
      			    <input type="text" className="form-control" id="numOf100s" name="numOf100s"
                       ref={input => this.numOf100s = input}
                       placeholder="Enter No of 100s" required />
      			</div>
      			<div className="form-group col-lg-4">
      			    <label for="totalBalls">Total Balls Played</label>
      			    <input type="number" className="form-control" id="totalBalls" name="totalBalls"
                       ref={input => this.totalBalls = input}
                       placeholder="Enter Total Balls Played" required />
      			</div>
      		    <div className="form-group col-lg-4">
      			    <label for="totalRuns">Total Runs Scored</label>
      			    <input type="number" className="form-control" id="totalRuns" name="totalRuns"
                       ref={input => this.totalRuns = input}
                       placeholder="Enter Total Runs Scored" required />
      			</div>
      		</div>
      		<div className="form-group col-lg-4 col-lg-offset-4">
      		  <input type="submit" className="form-control btn-primary" id="submit" value="Add Player" />
          </div>
        </form>
      </div>
    );
  }
}
