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
    console.log("handleClick has been called");
    console.log(checkpoint);
    this.setState({[checkpoint]: true})
  }

  render() {
    let currentlyVisibleQuestion = null;
    let checkpoint = null;

    if (!this.state.debuggingLesson && !this.state.pairHelp && !this.state.documenting) {
      currentlyVisibleQuestion="Have you gone through all the steps on the Learn How to Program debugging lesson?";
      checkpoint = "debuggingLesson";
    } else if (this.state.debuggingLesson && !this.state.pairHelp && !this.state.documenting ) {
      currentlyVisibleQuestion = "Have you asked another pair for help?";
      checkpoint = "pairHelp";
    } else {
      currentlyVisibleQuestion = "Have you spent 15 minutes going through  the problem documenting every step?";
      checkpoint = "documenting";
    }
    return(
      <>
        <Alert question = {currentlyVisibleQuestion} />
        <button onClick={this.handleClick(checkpoint)}>Yes</button>
      </>
    );

    // if (!this.state.debuggingLesson && !this.state.pairHelp && !this.state.documenting) {
    //   return (
    //     <>
    //       <Alert question="Have you gone through all the steps on the Learn How to Program debugging lesson?" />
    //       <button onClick={this.clickYesDebugging}>Yes</button>
    //     </>
    //   );
    // }
    // else if (this.state.debuggingLesson && !this.state.pairHelp && !this.state.documenting ) {
    //   return (
    //     <>
    //       <Alert question="Have you asked another pair for help" />
    //       <button onClick={this.clickYesPairHelp}>Yes</button>
    //     </>
    //   );
    // }
    // else if (this.state.pairHelp && this.state.debuggingLesson && !this.state.documenting) {
    //   return (
    //     <React.Fragment>
    //       <Alert question="Have you spent 15 minutes going through through the problem documenting every step?" />
    //       <button onClick={this.clickYesDocumenting}>Yes</button>
    //     </React.Fragment>
    //   );
    // }
    // else  {
    //   return (
    //     <React.Fragment>
    //       <NewTicketForm />
    //     </React.Fragment>
    //   );
    // }
  };
}

export default FormControl;

//   preSupportMap = [
//   {id: 1, question: "Have you gone through all the steps on the Learn How to Program debugging lesson?", onClick: this.clickYesDebugging(),},
//   {id: 2, question: "Have you asked another pair for help", onClick: this.clickYesDebugging(),},
//   {id: 3, question: "Have you spent 15 minutes going through through the problem documenting every step?", onClick: this.clickYesDocumenting(),},
// ]; 
