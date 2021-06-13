import React, { Component } from "react";
import { addEvent } from "../../helpers/addEvent";
import EventForm from "../../components/Event/EventForm.component";
import { UserContext } from "../../helpers/userContext"

class AddEventForm extends Component {
   static contextType = UserContext;
   
   constructor(props) {
      super(props);
      this.state = {
         description: "",
         summary: "",
         startTime: "",
         endTime: "",
         successMessage: "",
         errorMessage: ""
      }
   }
   
   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      })
   }
   
   onSubmit = async (event) => {
      event.preventDefault();
      const {description, summary, startTime, endTime} = this.state;
      const response = await addEvent(description, summary, startTime, endTime);
      if (response.status === 200) {
         this.setState({
            ...this.state,
            successMessage: "SuccessFully Added Your Event"
         })
      } else {
         this.setState({
            ...this.state,
            errorMessage: "Some Error Occurred!!"
         })
      }
   }
   
   render() {
      const {description, summary, startTime, endTime, successMessage, errorMessage} = this.state;
      
      return (
        <>
           <div style={{
              float: "right",
              color: "white",
              position: "absolute",
              top: "10px",
              right: "10px"
           }}>
              {
                 this.context.name ? (
                   <h3>
                      <span style={{color: "yellow", fontSize: "15px"}}>Signed in as</span>{"   "}
                      {this.context.name ? this.context.name : ""}
                   </h3>
                 ) : "Not Signed In"
              }
           </div>
           <div className="App">
              <EventForm
                formTitle="Add Event Form"
                description={description}
                summary={summary}
                startTime={startTime}
                endTime={endTime}
                successMessage={successMessage}
                errorMessage={errorMessage}
                inputHandleChange={this.handleChange}
                onSubmit={this.onSubmit}
              />
           </div>
        </>
      
      )
   }
}

export default AddEventForm;