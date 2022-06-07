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
    room_name=localStorage.getItem("roomname");

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });

      document.getElementById("msg").value="";

    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
