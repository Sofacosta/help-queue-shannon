import React from "react";
import Alert from "./Alert"

class NewTicketForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      debuggingLesson: false,
      pairHelp: false,
      documenting: false,
    };
  }

  clickYesDebugging = () => {
    this.setState(prevState => ({ debuggingLesson: !prevState.debuggingLesson }))
  }

  clickYesPairHelp = () => {
    this.setState(prevState => ({ pairHelp: !prevState.pairHelp }))  
  }

  clickYesDocumenting = () => {
    this.setState(prevState => ({documenting: !prevState.documenting }) )
  }

  // create separate components for 3 pages
  render() {
    if (!this.state.debuggingLesson && !this.state.pairHelp && !this.state.documenting) {
      return (
        <React.Fragment>
          <Alert question="Have you gone through all the steps on the Learn How to Program debugging lesson?" />
          <button onClick={this.clickYesDebugging}>Yes</button>
        </React.Fragment>
      );
    }
    else if (this.state.debuggingLesson && !this.state.pairHelp && !this.state.documenting ) {
      return (
        <React.Fragment>
          <Alert question="Have you asked another pair for help" />
          <button onClick={this.clickYesPairHelp}>Yes</button>
        </React.Fragment>
      );
    }
    else if (this.state.pairHelp && this.state.debuggingLesson && !this.state.documenting) {
      return (
        <React.Fragment>
          <Alert question="Have you spent 15 minutes going through through the problem documenting every step?" />
          <button onClick={this.clickYesDocumenting}>Yes</button>
        </React.Fragment>
      );
    }
    else  {
      return (
        <React.Fragment>
          <p>This is a form</p>
        </React.Fragment>
      );
    }
  };
}

export default NewTicketForm;