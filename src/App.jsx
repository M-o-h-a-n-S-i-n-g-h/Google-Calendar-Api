import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/Home.screen";
import AddEventForm from "./screens/AddEvent/AddEvent.screen";
import { UserContext } from "./helpers/userContext";
import DisplayEventsScreen from "./screens/DisplayEvents/DisplayEvents.screen";
import EditEventScreen from "./screens/EditEvent/EditEvent.screen";
import './App.css';

const App = () => {
   const [name, setName] = useState("");
   
   return (
     <BrowserRouter className="App">
        <Switch>
           <UserContext.Provider value={{name, setName}}>
              <Route exact path="/" component={HomeScreen}/>
              <Route exact path="/addEvent" component={AddEventForm}/>
              <Route exact path="/events" component={DisplayEventsScreen}/>
              <Route exact path="/event/update/:id" component={EditEventScreen}/>
           </UserContext.Provider>
        </Switch>
     </BrowserRouter>
   );
}

export default App;