import clock from "clock";
import document from "document";

clock.granularity = "minutes";

const hoursImg = document.getElementById("hours");
const minutesImg = document.getElementById("minutes");

const highlightMinutes = (minutes) => {
  minutesImg.image = `m${minutes}.png`
}

const highlightHours = (hours) => {
  hoursImg.image = `h${hours}.png`
}

clock.ontick = (evt) => {
  let hours = evt.date.getHours();
  hours = hours % 12 || 12;
  highlightHours(hours);
  highlightMinutes(evt.date.getMinutes());
}
