import React, { useContext, useEffect, useState } from "react";
import EventForm from "../../components/Event/EventForm.component";
import { formatTime } from "../../helpers/formatTime";
import { updateEvent } from "../../helpers/updateEvent";
import { UserContext } from "../../helpers/userContext";

const EditEventScreen = ({match}) => {
   const {name} = useContext(UserContext);
   
   //STATE
   const id = match.params.id;
   const [state, setState] = useState({
      description: "",
      summary: "",
      startTime: "",
      endTime: "",
      eventId: id,
      successMessage: "",
      errorMessage: ""
   });
   const {description, summary, startTime, endTime, eventId, successMessage, errorMessage} = state;
   
   var gapi = window.gapi;
   // Function to get an Event
   const getEvent = () => {
      gapi.client.calendar.events.get({
         calendarId: "mohan.singh1385664@gmail.com",
         eventId: eventId
      }).execute((res) => {
         setState({
            ...state,
            description: res.description,
            summary: res.summary,
         })
      });
   }
   
   useEffect(() => {
      getEvent();
   }, []);
   
   
   // HandleChange
   const handleChange = (event) => {
      setState({
         ...state,
         [event.target.name]: event.target.value,
      })
   };
   
   // onSubmit Handler
   const onSubmit = async (event) => {
      event.preventDefault();
      let newStartTime = formatTime(startTime)
      let newEndTime = formatTime(endTime);
      
      const updatedEvent = {
         'start': {
            'dateTime': newStartTime,
            'timeZone': 'Asia/Calcutta'
         },
         'end': {
            'dateTime': newEndTime,
            'timeZone': 'Asia/Calcutta'
         },
         'summary': summary,
         'description': description,
      };
      
      const response = await updateEvent(updatedEvent, eventId, "mohan.singh1385664@gmail.com");
      if (response.status === 200) {
         setState({
            ...state,
            successMessage: "Successfully Updated The event",
         })
      } else if (response.status === 404) {
         setState({
            ...state,
            errorMessage: "Not Found, Please Check your EventId or CalendarId"
         })
      }
   }
   
   return (
     <div>
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
        <EventForm
          formTitle="Edit Event Form"
          description={description}
          summary={summary}
          startTime={startTime}
          endTime={endTime}
          inputHandleChange={handleChange}
          onSubmit={onSubmit}
          successMessage={successMessage}
          errorMessage={errorMessage}
        />
     </div>
   )
}

export default EditEventScreen;