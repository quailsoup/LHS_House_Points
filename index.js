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


  // Submit patiki house points
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
    
    patikiRef.transaction(current => (current || 0) + inputVal);
    patikiInput.value = ""; // Clears the box after input   
});

// Submit kuaka house points
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
    
    kuakaRef.transaction(current => (current || 0) + inputkuakaVal);
    kuakaInput.value = ""; // Clears the box after input
});

// Submit kotare house points
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
  
  kotareRef.transaction(current => (current || 0) + inputkotareVal);
  kotareInput.value = ""; // Clears the box after input
});

// Submit kahu house points
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
  
  kahuRef.transaction(current => (current || 0) + inputkahuVal);
  kahuInput.value = ""; // Clears the box after input
});

// Submit mako house points
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
  
  makoRef.transaction(current => (current || 0) + inputmakoVal);
  makoInput.value = ""; // Clears the box after input
});


// Submit inaka house points
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
  // add to house points already submitted
  inakaRef.transaction(current => (current || 0) + inputinakaVal);
  inakaInput.value = ""; // Clears the box after input

});

