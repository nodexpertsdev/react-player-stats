import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Stat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="row">
        <td>{this.props.name}</td>
        <td>{this.props.dob}</td>
        <td>{this.props.height}</td>
        <td>{this.props.role}</td>
        <td>{this.props.battingStyle}</td>
        <td>{this.props.bowlingStyle}</td>
        <td>{this.props.iplTeam}</td>
        <td>{this.props.seasonsPlayed}</td>
        <td>{this.props.numOf50s}</td>
        <td>{this.props.numOf100s}</td>
        <td>{this.props.upvoteCount}</td>
        <td>{this.props.downvoteCount}</td>
      </tr>
    );
  }
}

Stat.propTypes = {
  name: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
  battingStyle: PropTypes.string.isRequired,
  bowlingStyle: PropTypes.string.isRequired,
  iplTeam: PropTypes.string.isRequired,
  seasonsPlayed: PropTypes.number.isRequired,
  numOf50s: PropTypes.number.isRequired,
  numOf100s: PropTypes.number.isRequired,
  upvoteCount: PropTypes.number.isRequired,
  downvoteCount: PropTypes.number.isRequired
};
