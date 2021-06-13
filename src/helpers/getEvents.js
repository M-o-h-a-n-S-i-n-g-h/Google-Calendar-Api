export const getEvents = () => {
   const gapi = window.gapi;
   
   return new Promise((resolve, reject) => {
      gapi.load("calendar", "v3", () => console.log("Calendar loaded"));
      gapi.client.calendar.events.list({
         calendarId: "primary",
      })
      .then((response) => {
         resolve(response.result)
      })
      .catch(err => reject(err));
   })
}