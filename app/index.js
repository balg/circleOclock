import clock from "clock";
import document from "document";

clock.granularity = "minutes";

const clockFace = document.getElementById("face");
const hourSlots = clockFace.getElementsByClassName('hour');
const minuteSlots = clockFace.getElementsByClassName('minute');

const highlightMinutes = (minutes) => {
  minuteSlots.forEach(slot => {
    const minuteValue = parseInt(slot.id.slice(1), 10);
    if (minuteValue <= minutes) {
      slot.style.opacity = 1;
    } else {
      slot.style.opacity = 0.5;
    }
  });
}

const highlightHours = (hours) => {
  hourSlots.forEach(slot => {
    const hourValue = parseInt(slot.id.slice(1), 10);
    if (hourValue <= hours) {
      slot.style.opacity = 1;
    } else {
      slot.style.opacity = 0.5;
    }
  });
}

clock.ontick = (evt) => {
  let hours = evt.date.getHours();
  hours = hours % 12 || 12;
  highlightHours(hours);
  highlightMinutes(evt.date.getMinutes());
}
