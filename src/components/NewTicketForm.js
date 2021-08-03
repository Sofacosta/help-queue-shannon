import React from "react";

class NewTicketForm extends  React.Component {
  constructor (props) {
    super(props);
    this.state ={
      debuggingLesson : false,
      pairHelp : false,
      documenting : false, 
    };
  }

  // create separate components for 3 pages
  render() {
    return(
      <React.Fragment>
        <h3>this is a form.</h3>
      </React.Fragment>
    );
  } 

}

export default NewTicketForm;