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
document.getElementById('submit-event').addEventListener('click', () => {
const inputVal = eventInput.value.trim();

if (!inputVal) {
  alert("Please enter a valid event name.");
  return;
}

  eventRef.set(inputVal) // just store the string
    .then(() => {
    console.log("Data saved successfully");
    }
  )
  .catch((error) => {
    console.error("Error saving data");
  });
});

