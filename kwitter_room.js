 var firebaseConfig = {
      apiKey: "AIzaSyA8teW7_S5oQ-5ARd4rb7VeVSQ0CB0UBAg",
      authDomain: "practice-database-84a72.firebaseapp.com",
      databaseURL: "https://practice-database-84a72-default-rtdb.firebaseio.com",
      projectId: "practice-database-84a72",
      storageBucket: "practice-database-84a72.appspot.com",
      messagingSenderId: "822189106200",
      appId: "1:822189106200:web:2fef0a3894e20e8ea0cf6d"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
console.log(user_name);

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name" + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}