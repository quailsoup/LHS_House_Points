// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDGkNus0BpWcV68Xhcgl-iWkHNmYbaLDiU",
    authDomain: "house-points-83688.firebaseapp.com",
    databaseURL: "https://house-points-83688-default-rtdb.firebaseio.com",
    projectId: "house-points-83688",
    storageBucket: "house-points-83688.firebasestorage.app",
    messagingSenderId: "706900936679",
    appId: "1:706900936679:web:21e15da81946fb41b29f42",
    measurementId: "G-83FTQPYTEL"
  };

// Initialise Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const patikiInput = document.getElementById('patiki-input');
const kuakaInput = document.getElementById('kuaka-input');
const kotareInput = document.getElementById('kotare-input');
const kahuInput = document.getElementById('kahu-input');
const makoInput = document.getElementById('mako-input');
const inakaInput = document.getElementById('inaka-input');

const patikiCountDisplay = document.getElementById('patiki-count');
const kuakaCountDisplay = document.getElementById('kuaka-count');
const kotareCountDisplay = document.getElementById('kotare-count');
const kahuCountDisplay = document.getElementById('kahu-count');
const makoCountDisplay = document.getElementById('mako-count');
const inakaCountDisplay = document.getElementById('inaka-count');

const patikiRef = db.ref('votes/patiki');
const kuakaRef = db.ref('votes/kuaka');
const kotareRef = db.ref('votes/kotare');
const kahuRef = db.ref('votes/kahu');
const makoRef = db.ref('votes/mako');
const inakaRef = db.ref('votes/inaka');

let patikiCount = 0;
let kuakaCount = 0;
let kotareCount = 0;
let kahuCount = 0;
let makoCount = 0;
let inakaCount = 0;

// Display the house point total count on the editing page
patikiRef.on('value', snapshot => {
  patikiCount = snapshot.val() || 0;
  patikiCountDisplay.textContent = patikiCount;
});
kuakaRef.on('value', snapshot => {
  kuakaCount = snapshot.val() || 0;
  kuakaCountDisplay.textContent = kuakaCount;
});
kotareRef.on('value', snapshot => {
  kotareCount = snapshot.val() || 0;
  kotareCountDisplay.textContent = kotareCount;
});
kahuRef.on('value', snapshot => {
  kahuCount = snapshot.val() || 0;
  kahuCountDisplay.textContent = kahuCount;
});
makoRef.on('value', snapshot => {
  makoCount = snapshot.val() || 0;
  makoCountDisplay.textContent = makoCount;
});
inakaRef.on('value', snapshot => {
  inakaCount = snapshot.val() || 0;
  inakaCountDisplay.textContent = inakaCount;
});


  // reset patiki house points
  document.getElementById("reset-patiki").addEventListener("click", function() {
  // Ask user if they want to reset the house points
    const confirmed = confirm("Are you sure you want to reset Pātiki's points to 0?");
  if (confirmed) {
  // Reset the house points
     document.getElementById("patiki-count").textContent = "0";
      // Update the house points on Firebase
    const db = firebase.database();
    patikiRef.set(0)
      .then(() => {
        console.log("Patiki's points reset to 0 in Firebase.");
      })
      .catch((error) => {
        console.error("Error resetting points:", error);
      });
  }
  });
  // submit patiki house points
  document.getElementById('submit-patiki').addEventListener('click', () => {
    const inputVal = parseInt(patikiInput.value);

    if (isNaN(inputVal)) {
      alert("Please enter a valid number of house points.");
      return;
      // allow a negative number to be entered
    } else if (inputVal < 0) {
      var confirmed = confirm("Are you sure you want to enter a negative number?")
      if (confirmed === false) {
        return;
      }
    } 
    Toastify({
      // getting the input that are blank
      text: 'Saved Pātiki House Points Successfully!',
      duration: 2500,
      close: true,
      gravity: "bottom", // if the notification is displayed at the top or bottom of the screen
      position: "left", // if the notification is displayed at the left, right, or centre of the page
      stopOnFocus: true, // Makes sure notification doesn't disappear when hovered.
      className: "message", // extra css styling in the index.css
      style: {
          background: "linear-gradient(330deg,rgb(0, 255, 42), rgb(102, 243, 120))", // notification colour
      },
      onClick: function(){} // Callback after click
  }).showToast(); // displaying the notification text
    
    patikiRef.transaction(current => (current || 0) + inputVal);
    patikiInput.value = ""; // Clears the box after input   

});

// reset kuaka house points
  document.getElementById("reset-kuaka").addEventListener("click", function() {
  // Ask user if they want to reset the house points
    const confirmed = confirm("Are you sure you want to reset Kūaka's points to 0?");
  if (confirmed) {
  // Reset the house points
     document.getElementById("kuaka-count").textContent = "0";
      // Update the house points on Firebase
    const db = firebase.database();
    kuakaRef.set(0)
      .then(() => {
        console.log("Kūaka's points reset to 0 in Firebase.");
      })
      .catch((error) => {
        console.error("Error resetting points:", error);
      });
  }
  });
// submit kuaka house points
document.getElementById('submit-kuaka').addEventListener('click', () => {
    const inputkuakaVal = parseInt(kuakaInput.value);
    
    if (isNaN(inputkuakaVal)) {
        alert("Please enter a valid number of house points.");
        return;
        // allow a negative number to be entered
    } else if (inputkuakaVal < 0) {
      var confirmed = confirm("Are you sure you want to enter a negative number?")
      if (confirmed === false) {
        return;
      }
    }
      // making a toast notification
  Toastify({
      // getting the input that are blank
      text: 'Saved Kūaka House Points Successfully!',
      duration: 2500,
      close: true,
      gravity: "bottom", // if the notification is displayed at the top or bottom of the screen
      position: "left", // if the notification is displayed at the left, right, or centre of the page
      stopOnFocus: true, // Makes sure notification doesn't disappear when hovered.
      className: "message", // extra css styling in the index.css
      style: {
          background: "linear-gradient(330deg,rgb(0, 255, 42), rgb(102, 243, 120))", // notification colour
      },
      onClick: function(){} // Callback after click
  }).showToast(); // displaying the notification text

    kuakaRef.transaction(current => (current || 0) + inputkuakaVal);
    kuakaInput.value = ""; // Clears the box after input
});

// reset kotare house points
  document.getElementById("reset-kotare").addEventListener("click", function() {
  // Ask user if they want to reset the house points
    const confirmed = confirm("Are you sure you want to reset Kōtare's points to 0?");
  if (confirmed) {
  // Reset the house points
     document.getElementById("kotare-count").textContent = "0";
      // Update the house points on Firebase
    const db = firebase.database();
    kotareRef.set(0)
      .then(() => {
        console.log("Kōtare's points reset to 0 in Firebase.");
      })
      .catch((error) => {
        console.error("Error resetting points:", error);
      });
  }
  });
// submit kotare house points
document.getElementById('submit-kotare').addEventListener('click', () => {
  const inputkotareVal = parseInt(kotareInput.value);
  
  if (isNaN(inputkotareVal)) {
      alert("Please enter a valid number of house points.");
      return;
      // allow a negative number to be entered
  } else if (inputkotareVal < 0) {
    var confirmed = confirm("Are you sure you want to enter a negative number?")
    if (confirmed === false) {
      return;
    }
  }
   // making a toast notification
  Toastify({
      // getting the input that are blank
      text: 'Saved Kōtare House Points Successfully!',
      duration: 2500,
      close: true,
      gravity: "bottom", // if the notification is displayed at the top or bottom of the screen
      position: "left", // if the notification is displayed at the left, right, or centre of the page
      stopOnFocus: true, // Makes sure notification doesn't disappear when hovered.
      className: "message", // extra css styling in the index.css
      style: {
          background: "linear-gradient(330deg,rgb(0, 255, 42), rgb(102, 243, 120))", // notification colour
      },
      onClick: function(){} // Callback after click
  }).showToast(); // displaying the notification text
  
  kotareRef.transaction(current => (current || 0) + inputkotareVal);
  kotareInput.value = ""; // Clears the box after input
});

// reset kahu house points
  document.getElementById("reset-kahu").addEventListener("click", function() {
  // Ask user if they want to reset the house points
    const confirmed = confirm("Are you sure you want to reset Kāhu's points to 0?");
  if (confirmed) {
  // Reset the house points
     document.getElementById("kahu-count").textContent = "0";
      // Update the house points on Firebase
    const db = firebase.database();
    kahuRef.set(0)
      .then(() => {
        console.log("Kāhu's points reset to 0 in Firebase.");
      })
      .catch((error) => {
        console.error("Error resetting points:", error);
      });
  }
  });
// submit kahu house points
document.getElementById('submit-kahu').addEventListener('click', () => {
  const inputkahuVal = parseInt(kahuInput.value);
  
  if (isNaN(inputkahuVal)) {
      alert("Please enter a valid number of house points.");
      return;
      // allow a negative number to be entered
  } else if (inputkahuVal < 0) {
    var confirmed = confirm("Are you sure you want to enter a negative number?")
    if (confirmed === false) {
      return;
    }
  }
    // making a toast notification
  Toastify({
      // getting the input that are blank
      text: 'Saved Kāhu House Points Successfully!',
      duration: 2500,
      close: true,
      gravity: "bottom", // if the notification is displayed at the top or bottom of the screen
      position: "left", // if the notification is displayed at the left, right, or centre of the page
      stopOnFocus: true, // Makes sure notification doesn't disappear when hovered.
      className: "message", // extra css styling in the index.css
      style: {
          background: "linear-gradient(330deg,rgb(0, 255, 42), rgb(102, 243, 120))", // notification colour
      },
      onClick: function(){} // Callback after click
  }).showToast(); // displaying the notification text
  
  kahuRef.transaction(current => (current || 0) + inputkahuVal);
  kahuInput.value = ""; // Clears the box after input
});

// reset mako house points
  document.getElementById("reset-mako").addEventListener("click", function() {
  // Ask user if they want to reset the house points
    const confirmed = confirm("Are you sure you want to reset Mako's points to 0?");
  if (confirmed) {
  // Reset the house points
     document.getElementById("mako-count").textContent = "0";
      // Update the house points on Firebase
    const db = firebase.database();
    makoRef.set(0)
      .then(() => {
        console.log("Mako's points reset to 0 in Firebase.");
      })
      .catch((error) => {
        console.error("Error resetting points:", error);
      });
  }
  });
// submit mako house points
document.getElementById('submit-mako').addEventListener('click', () => {
  const inputmakoVal = parseInt(makoInput.value);
  
  if (isNaN(inputmakoVal)) {
      alert("Please enter a valid number of house points.");
      return;
      // allow a negative number to be entered
  } else if (inputmakoVal < 0) {
    var confirmed = confirm("Are you sure you want to enter a negative number?")
    if (confirmed === false) {
      return;
    }
  }
    // making a toast notification
  Toastify({
      // getting the input that are blank
      text: 'Saved Mako House Points Successfully!',
      duration: 2500,
      close: true,
      gravity: "bottom", // if the notification is displayed at the top or bottom of the screen
      position: "left", // if the notification is displayed at the left, right, or centre of the page
      stopOnFocus: true, // Makes sure notification doesn't disappear when hovered.
      className: "message", // extra css styling in the index.css
      style: {
          background: "linear-gradient(330deg,rgb(0, 255, 42), rgb(102, 243, 120))", // notification colour
      },
      onClick: function(){} // Callback after click
  }).showToast(); // displaying the notification text
  
  makoRef.transaction(current => (current || 0) + inputmakoVal);
  makoInput.value = ""; // Clears the box after input
});


// reset inaka house points
  document.getElementById("reset-inaka").addEventListener("click", function() {
  // Ask user if they want to reset the house points
    const confirmed = confirm("Are you sure you want to reset Īnaka's points to 0?");
  if (confirmed) {
  // Reset the house points
     document.getElementById("inaka-count").textContent = "0";
      // Update the house points on Firebase
    const db = firebase.database();
    inakaRef.set(0)
      .then(() => {
        console.log("Īnaka's points reset to 0 in Firebase.");
      })
      .catch((error) => {
        console.error("Error resetting points:", error);
      });
  }
  });
// submit inaka house points
document.getElementById('submit-inaka').addEventListener('click', () => {
  const inputinakaVal = parseInt(inakaInput.value);
  
  if (isNaN(inputinakaVal)) {
      alert("Please enter a valid number of house points.");
      return;
      // allow a negative number to be entered
  } else if (inputinakaVal < 0) {
    var confirmed = confirm("Are you sure you want to enter a negative number?")
    if (confirmed === false) {
      return;
    }
  }
  // making a toast notification
  Toastify({
      // getting the input that are blank
      text: 'Saved Īnaka House Points Successfully!',
      duration: 2500,
      close: true,
      gravity: "bottom", // if the notification is displayed at the top or bottom of the screen
      position: "left", // if the notification is displayed at the left, right, or centre of the page
      stopOnFocus: true, // Makes sure notification doesn't disappear when hovered.
      className: "message", // extra css styling in the index.css
      style: {
          background: "linear-gradient(330deg,rgb(0, 255, 42), rgb(102, 243, 120))", // notification colour
      },
      onClick: function(){} // Callback after click
  }).showToast(); // displaying the notification text

  // add to house points already submitted
  inakaRef.transaction(current => (current || 0) + inputinakaVal);
  inakaInput.value = ""; // Clears the box after input
});

const eventDataDisplay = document.getElementById('events');
const eventInput = document.getElementById("event-input");


document.getElementById('submit-event').addEventListener('click', () => {
const inputVal = eventInput.value.trim();

// allow a valid event name to be entered
if (!inputVal) {
  alert("Please enter a valid event name.");
  return;
}

eventRef.set(inputVal) // just store the string
.then(() => {
  // notify in the console if the data is saved successfully
  console.log("Data saved successfully");
  // making a toast notification
  Toastify({
      // getting the input that are blank
      text: 'Saved House Events Successfully!',
      duration: 2500,
      close: true,
      gravity: "bottom", // if the notification is displayed at the top or bottom of the screen
      position: "left", // if the notification is displayed at the left, right, or centre of the page
      stopOnFocus: true, // Makes sure notification doesn't disappear when hovered.
      className: "message", // extra css styling in the index.css
      style: {
          background: "linear-gradient(330deg,rgb(0, 255, 42), rgb(102, 243, 120))", // notification colour
      },
      onClick: function(){} // Callback after click
  }).showToast(); // displaying the notification text
    }
  )
  // notify in the console if there is an error saving the data
  .catch((error) => {
    console.error("Error saving data");
      // making a toast notification
        Toastify({
            // getting the input that are blank
            text: 'Error Saving Data!',
            duration: 2500,
            close: true,
            gravity: "bottom", // if the notification is displayed at the top or bottom of the screen
            position: "left", // if the notification is displayed at the left, right, or centre of the page
            stopOnFocus: true, // Makes sure notification doesn't disappear when hovered.
            className: "message", // extra css styling in the index.css
            style: {
                background: "linear-gradient(330deg, red)", // notification colour
            },
            onClick: function(){} // Callback after click
        }).showToast(); // displaying the notification text
  });
});

// make the events submitted display on the house events page and also remain in the text box
eventDataInputShow = document.getElementById('event-input')
const eventRef = db.ref('events/lhs');
eventRef.on('value', snapshot => {
  eventDataShow = snapshot.val() || 0;
  eventDataInputShow.textContent = eventDataShow;
});

