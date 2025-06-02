const eventDataDisplay = document.getElementById('events');
const eventInput = document.getElementById("event-input")

const eventRef = db.ref('events/lhs');

// notify if there are no events registered or if the display was not found
eventRef.on('value', snapshot => {
  const eventData = snapshot.val() || "No events registered"
  if (eventDataDisplay) {
    eventDataDisplay.textContent = eventData;
  } else {
    console.error("Display not found")
  }
});
document.getElementById('submit-event').addEventListener('click', () => {
const inputVal = eventInput.value.trim();

// don't allow nothing to be submitted
if (!inputVal) {
  alert("Please enter a valid event name.");
  return;
}

  eventRef.set(inputVal) // just store the string
    .then(() => {
    console.log("Data saved successfully");
    }
  )
  // notify if there is an error saving the event data
  .catch((error) => {
    console.error("Error saving data");
  });
});

