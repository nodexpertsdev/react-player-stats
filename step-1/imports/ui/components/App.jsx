import React from 'react';
import { Meteor } from 'meteor/meteor';

// Simple React Component to render at startup
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello Meteorites!',
      show: true,
    };
  }

  // State handler for text box
  updateText(e) {
    const text = e.target.value;
    this.setState({ text });
  }

  // State handler for checkbox
  toggleInputBox(e) {
    const show = e.target.checked;
    this.setState({ show });
  }

  render() {
    const { text, show } = this.state;
    const staticText = 'Meteor Noida';

    return (
      <div id="container">
        {/* Rendering Element (simple text render) */}
        <b>Static Text:</b> {staticText}
        <br /><br />

        {/* Conditional Rendering (Checkbox to show input text box) */}
        <b>Show Input Box:</b>
        <input type="checkbox" name="showInputBox" checked={show} onChange={this.toggleInputBox.bind(this)}/>
        <br /><br />

        {/* Updating Element (Text Box, Update state on change) */}
        <b>Dynamic Text:</b> {text}
        <br />

        {/* Conditionally render input text box based on checkbox value */}
        {
          show
            ? <div>
                <input type="text" name="updateText" value={text} onChange={this.updateText.bind(this)}/>
                <br />
              </div>
            : null
        }
      </div>
    );
  }
}
