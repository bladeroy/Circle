firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

  	document.getElementById("user_div").style.display = "block";
  	document.getElementById("login_div").style.display = "none";

  	var user = firebase.auth().currentUser;


  	if(user != null) {

  		var email = user.email;

  		document.getElementById("user_pr").innerHTML = "Welcome User :" + email;
  	}
    // User is signed in.
  } else {

  	document.getElementById("user_div").style.display = "none";
  	document.getElementById("login_div").style.display = "block";
    // No user is signed in.
  }
});



function login(){

	var userEmail = document.getElementById("email").value;
	var userPass = document.getElementById("password").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  
  window.alert("Error :" + errorMessage);
});
} 

function logout(){
   firebase.auth().signOut();
   };

