import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../helpers/userContext";
import { HomeStyles } from "./HomeScreen.styled";
import { signIn } from "../../helpers/signIn";
import Button from "../../components/Button/Button.component";

const HomeScreen = () => {
   const {name, setName} = useContext(UserContext);
   
   const handleSignIn = async () => {
      const response = await signIn();
      const data = await response;
      const userName = data.At.Ve;
      setName(userName);
   }
   
   const handleSignOut = () => {
      const gapi = window.gapi;
      gapi.auth2.getAuthInstance().signOut()
      .then(() => setName(null))
      .catch(err => console.error(err));
   }
   
   return (
     <HomeStyles>
        <h1>Google Calendar Operations</h1>
        <div className="button__container">
           <span>
              {
                 !name ? (<Button primary="primary" onClick={handleSignIn}>SignIn</Button>)
                       : (<Button primary="primary" onClick={handleSignOut}>SignOut</Button>)
              }
           </span>
           <span>
              <Button primary="primary">
                 <Link to="/addEvent">Add Event</Link>
              </Button>
           </span>
           <span>
              <Button primary="primary">
                 <Link to="/events">Display Events</Link>
              </Button>
           </span>
        </div>
        <h1 style={{fontSize: "1.9em"}}>
           {
              name ? `Signed in as  ${name}` : ""
           }
        </h1>
        <div className="quote__box">
           <h2>"Make Each Day Your MasterPiece"</h2>
        </div>
     </HomeStyles>
   )
}

export default HomeScreen;