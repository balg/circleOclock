import clock from "clock";
import document from "document";

clock.granularity = "minutes";

const hoursArc = document.getElementById("hours");
const minutesArc = document.getElementById("minutes");

const highlightMinutes = (minutes) => {
  // 1 minute = 6 degrees
  minutesArc.sweepAngle = minutes * 6
}

const highlightHours = (hours) => {
  // 1 hour = 30 degrees
  hoursArc.sweepAngle = hours * 30
}

clock.ontick = (evt) => {
  let hours = evt.date.getHours();
  hours = hours % 12 || 12;
  highlightHours(hours);
  highlightMinutes(evt.date.getMinutes());
}
