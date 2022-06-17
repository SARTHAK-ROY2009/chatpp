
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


function addUser() {
  user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);

  window.location = "chat_room.html";

}