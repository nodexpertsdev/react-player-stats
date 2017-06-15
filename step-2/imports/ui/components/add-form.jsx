import React from 'react';
import { Meteor } from 'meteor/meteor';

// Simple React Component to render at startup
export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
    	  <form id='addPlayerInfo'>
          <div className="row">
            <div className="form-group col-lg-4">
              <label for="name">Name</label>
    			    <input type="text"
                     className="form-control"
                     id="name"
                     name="name"
                     placeholder="Enter Name" required />
            </div>
            <div class="form-group col-lg-4">
      			    <label for="dob">Date Of Birth</label>
      			    <input type="date"
                       className="form-control"
                       id="dob"
                       name="dob"
                       placeholder="Enter DOB" required />
      			</div>
      			<div class="form-group col-lg-4">
      			    <label for="height">Height(cm)</label>
      			    <input type="number"
                       className="form-control"
                       id="height"
                       name="height"
                       placeholder="Enter Height" required />
      			</div>
          </div>

          <div class="row">
      			<div class="form-group col-lg-4">
      			    <label for="iplTeam">IPL Team</label>
      			    <input type="text" class="form-control"
                       id="iplTeam" name="iplTeam"  placeholder="Enter IPL Team" required />
      			</div>
      			<div class="form-group col-lg-4">
      			    <label for="seasonsPlayed">Seasons Played</label>
      			    <input type="number" class="form-control" id="seasonsPlayed" name="seasonsPlayed"
                       placeholder="Enter Seasons Played" required />
      			</div>
      		    <div class="form-group col-lg-4">
      			    <label for="numOf50s">Number of 50s</label>
      			    <input type="number" class="form-control" id="numOf50s" name="numOf50s"
                       placeholder="Enter Number of 50s" required />
      			</div>
      		</div>
      		<div class="row">
      			<div class="form-group col-lg-4">
      			    <label for="numOf100s">No of 100s</label>
      			    <input type="text" class="form-control" id="numOf100s" name="numOf100s"
                       placeholder="Enter No of 100s" required />
      			</div>
      			<div class="form-group col-lg-4">
      			    <label for="totalBalls">Total Balls Played</label>
      			    <input type="number" class="form-control" id="totalBalls" name="totalBalls"
                       placeholder="Enter Total Balls Played" required />
      			</div>
      		    <div class="form-group col-lg-4">
      			    <label for="totalRuns">Total Runs Scored</label>
      			    <input type="number" class="form-control" id="totalRuns" name="totalRuns"
                       placeholder="Enter Total Runs Scored" required />
      			</div>
      		</div>
      		<div class="form-group col-lg-4 col-lg-offset-4">
      		  <input type="submit" className="form-control btn-primary" id="submit" value="Add Player" />
          </div>
        </form>
      </div>
    );
  }
}
