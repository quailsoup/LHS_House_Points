const eventDataDisplay = document.getElementById('events');
const eventInput = document.getElementById("event-input")

const eventRef = db.ref('events/lhs');


eventRef.on('value', snapshot => {
  const eventData = snapshot.val() || "No events registered"
  if (eventDataDisplay) {
    eventDataDisplay.textContent = eventData;
  } else {
    console.error("Display not found")
  }
});

