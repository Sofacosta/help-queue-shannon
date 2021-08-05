import React from "react";
import Alert from "./Alert"
import NewTicketForm from "./NewTicketForm"


class FormControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      debuggingLesson: false,
      pairHelp: false,
      documenting: false,
    };
  }

  handleClick = (checkpoint) => () => {
    this.setState({[checkpoint]: true})
  }

  render() {
    let currentlyVisibleQuestion = null;
    let checkpoint = null;
    let component = null;

    if (!this.state.debuggingLesson && !this.state.pairHelp && !this.state.documenting) {
      checkpoint = "debuggingLesson";
      component= <Alert question = "Have you gone through all the steps on the Learn How to Program debugging lesson?" />
    } else if (this.state.debuggingLesson && !this.state.pairHelp && !this.state.documenting ) {
      checkpoint = "pairHelp";
      component= <Alert question = "Have you asked another pair for help?" />
    } else if (this.state.debuggingLesson && this.state.pairHelp && !this.state.documenting ) {
      checkpoint = "documenting";
      component= <Alert question = "Have you spent 15 minutes going through  the problem documenting every step?" />
    } else {
      component= <NewTicketForm />
    }
    return(
      <>
        {component}
        <button onClick={this.handleClick(checkpoint)}>Yes</button>
      </>
    );
  };
}

export default FormControl;

