export const updateEvent = (event, eventId, calendarId) => {
   return new Promise((resolve, reject) => {
      const gapi = window.gapi;
      gapi.client.calendar.events.patch({
         calendarId: calendarId,
         eventId: eventId,
         resource: event
      })
      .then((res) => resolve(res))
      .catch(() => reject("Some error Occurred, Can't Update Event"));
   })
}