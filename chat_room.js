
const firebaseConfig = {
  apiKey: "AIzaSyCwCyPbYDGyy_ZHkQiL3E-_-8v1rs5lZP0",
  authDomain: "chatapp-8c761.firebaseapp.com",
  databaseURL: "https://chatapp-8c761-default-rtdb.firebaseio.com",
  projectId: "chatapp-8c761",
  storageBucket: "chatapp-8c761.appspot.com",
  messagingSenderId: "171846712636",
  appId: "1:171846712636:web:700e35d2794051886d7239"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  var user_name=localStorage.getItem("user_name");
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room name - " + Room_names);
         row="<div class='room_name' id=>"+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";       
                document.getElementById("output").innerHTML += row;
                //End code
          });
    });
}
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "chat_message.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.locationbar = "chat_message.html";
}

      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location=("index.html");
      }
      document.getElementById("output").innerHTML +=output;
