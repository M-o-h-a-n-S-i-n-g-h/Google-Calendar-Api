import React from "react";
import { EventFormStyles } from "./EventForm.styled";
import { Form, Input } from "../Form";
import Button from "../Button/Button.component";

class EventForm extends React.Component {
   render() {
      const {
         formTitle,
         description,
         summary,
         startTime,
         endTime,
         onSubmit,
         inputHandleChange,
         successMessage,
         errorMessage
      } = this.props;
      
      return (
        <div className="App">
           {successMessage && <h2 style={{color: "rgb(50, 232, 117)"}}>{successMessage}</h2>}
           {errorMessage && <h2 style={{color: "rgb(255, 0, 0)"}}>{errorMessage}</h2>}
           <EventFormStyles>
              <h2 style={{color: "rgb(50, 232, 117)"}}>{formTitle}</h2>
              <Form onSubmit={onSubmit}>
                 <Input
                   label="Description"
                   type="text"
                   name="description"
                   value={description}
                   onChange={inputHandleChange}
                 />
                 <Input
                   label="Summary"
                   type="text"
                   name="summary"
                   value={summary}
                   onChange={inputHandleChange}
                 />
                 <Input
                   label="Start Time"
                   type="datetime-local"
                   name="startTime"
                   value={startTime}
                   onChange={inputHandleChange}
                 />
                 <Input
                   label="End Time"
                   type="datetime-local"
                   name="endTime"
                   value={endTime}
                   onChange={inputHandleChange}
                 />
                 <Button>Submit Event</Button>
              </Form>
           </EventFormStyles>
        </div>
      )
   }
}

export default EventForm;