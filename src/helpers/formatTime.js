import moment from "moment-timezone";

export const formatTime = (time) => {
   time = (time.split("T").join(" "));
   time = moment.tz(time, "Asia/Calcutta").format()
   return time.split("+").join("-");
}