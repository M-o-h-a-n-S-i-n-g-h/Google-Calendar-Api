import React, { useState, useEffect, useContext } from "react";
import { DisplayEventsStyles } from "./DisplayEvents.styled";
import Button from "../../components/Button/Button.component";
import Event from "../../components/Event/Event.component";
import { getEvents } from "../../helpers/getEvents";
import { UserContext } from "../../helpers/userContext";
import { deleteEvent } from "../../helpers/deleteEvent";

const DisplayEventsScreen = ({history}) => {
   const [events, setEvents] = useState([]);
   const {name} = useContext(UserContext);
   
   const gotToUpdateEvent = (id) => {
      history.push(`/event/update/${id}`)
   }
   
   const getAllEvents = () => {
      getEvents()
      .then(res => {
         setEvents(res.items);
      })
      .catch(err => console.error(err));
   }
   
   const removeEvent = (id) => {
      deleteEvent(id)
      .then(() => getAllEvents())
      .catch(err => console.log(err))
   }
   
   useEffect(() => {
      getAllEvents();
   }, [])
   
   
   return (
     <>
        <div style={{
           float: "right",
           color: "white",
           position: "absolute",
           top: "10px",
           right: "10px"
        }}>
           <h3>
              <span style={{color: "yellow", fontSize: "15px"}}>Signed in as</span>{"   "}
              {name ? name : "No name"}
           </h3>
        </div>
        <div className="App">
           <DisplayEventsStyles>
              <h1>Events</h1>
              {events.length !== 0 ? (
                events.map((event, index) => {
                   return (
                     <div key={index}>
                        <Event
                          description={event.description}
                          summary={event.summary}
                          startTime={event.start.dateTime}
                          endTime={event.end.dateTime}
                        />
                        <Button submit onClick={() => gotToUpdateEvent(event.id)}>
                           Update Event
                        </Button>
                        <Button danger onClick={() => removeEvent(event.id)}>
                           Delete Event
                        </Button>
                     </div>
                   )
                })
              ) : <h1>No events</h1>}
           </DisplayEventsStyles>
        </div>
     </>
   )
}

export default DisplayEventsScreen;