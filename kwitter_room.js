var firebaseConfig = {
      apiKey: "AIzaSyDowwkm_eNCIe4cZB2cXvn4_XRJqUllsJw",
      authDomain: "c-94-e7630.firebaseapp.com",
      databaseURL: "https://c-94-e7630-default-rtdb.firebaseio.com",
      projectId: "c-94-e7630",
      storageBucket: "c-94-e7630.appspot.com",
      messagingSenderId: "952824053862",
      appId: "1:952824053862:web:cc61af7348942661c3ada7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("h333").innerHTML="Welcome"+ user_name +"!";
function addroom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log( "Room_name"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      

   document.getElementById("output").innerHTML += row;
      //row="<div class='room_name' id="+ Room_names+ "onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
//document.getElementById("output").innerHTML +=row;


      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
   localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}