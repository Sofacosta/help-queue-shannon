import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewTicketForm(props) {
  return(
      <>
       <h1>COMPONENT: NewTicketForm.js</h1>
        <form onSubmit={handleNewTicketFormSubmission}>
          <input type='text' name='names' placeholder='Pair Names' />
          <input type='text' name='location' placeholder='Location' />
          <input type='textarea' name='issue' placeholder='Describe your issue' />
          <button type='submit'>Help!</button>
        </form>
      </>
  );
  function handleNewTicketFormSubmission(event){
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;