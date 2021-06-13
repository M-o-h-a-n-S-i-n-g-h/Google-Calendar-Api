export const deleteEvent = (eventId) => {
   const gapi = window.gapi;
   
   return new Promise((resolve, reject) => {
      gapi.client.calendar.events.delete({
         calendarId: "primary",
         eventId: eventId
      })
      .then(res => resolve(res))
      .catch(err => reject(err))
   })
}