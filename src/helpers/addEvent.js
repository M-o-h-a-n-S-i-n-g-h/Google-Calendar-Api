import { formatTime } from "./formatTime";

export const addEvent = (description, summary, startTime, endTime) => {
   startTime = formatTime(startTime);
   endTime = formatTime(endTime);
   const gapi = window.gapi;
   
   return new Promise((resolve, reject) => {
      gapi.client.load('calendar', 'v3', () => console.log('calendar Loaded!'));
      
      const event = {
         'start': {
            'dateTime': startTime,
            'timeZone': 'Asia/Calcutta'
         },
         'end': {
            'dateTime': endTime,
            'timeZone': 'Asia/Calcutta'
         },
         'summary': summary,
         'description': description,
      };
      
      gapi.client.calendar.events.insert({
         'calendarId': 'primary',
         'resource': event,
      })
      .then(response => resolve(response))
      .catch(err => {
         reject("Some error Occurred, Can't Add event")
      })
   })
}