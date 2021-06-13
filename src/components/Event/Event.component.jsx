import React from "react";
import styled from "styled-components";

const EventStyles = styled.div`
  border: solid 1px white;
  width: 500px;
  margin: 20px auto 20px auto;
  border-radius: 10px;

  h3 {
    color: rgb(50, 232, 117);
  }

  span {
    color: white;
  }
`

const Event = ({description, startTime, endTime, summary}) => {
   return (
     <EventStyles>
        <h3>Description: <span>{description}</span></h3>
        <h3>Summary: <span>{summary}</span></h3>
        <h3>StartTime: <span>{startTime}</span></h3>
        <h3>EndTime: <span>{endTime}</span></h3>
     </EventStyles>
   )
}

export default Event;