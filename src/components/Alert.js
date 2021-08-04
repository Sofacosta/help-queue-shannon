import React from "react";

function Alert(props){
  return(
    <React.Fragment>
      <h3>{props.question}</h3>
    </React.Fragment>
  );
}

export default Alert;