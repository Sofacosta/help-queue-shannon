import React from "react";
import Ticket from "./Ticket";
import PropTypes from 'prop-types';

function TicketList(props){
  return (
    <React.Fragment>
      <h1>COMPONENT: TicketList.js</h1>
     {props.ticketList.map((ticket, index) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index}/>
    )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;