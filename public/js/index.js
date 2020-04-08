
{/* <script> */}
   {/* Your web app's Firebase configuration */}
  var firebaseConfig = {
    apiKey: "AIzaSyA6yKEXLrWCOmBougSQJda4-W-1Zc65K2k",
    authDomain: "tcproject-fd637.firebaseapp.com",
    databaseURL: "https://tcproject-fd637.firebaseio.com",
    projectId: "tcproject-fd637",
    storageBucket: "tcproject-fd637.appspot.com",
    messagingSenderId: "341772868554",
    appId: "1:341772868554:web:b3f4c9046358ce441f0d33",
    measurementId: "G-2105K0VZHZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
{/* </script> */}

$("#sign").click(function()
{
    var email = $("#email").val(); 

    if (email != "")
    {
        // var result = firebase.auth.
    }
    else{
        window.alert("Fill out all fields");
    }
})