var provider = new firebase.auth.GoogleAuthProvider();
var database = firebase.database();

function signin(){
	firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}


var user = firebase.auth().currentUser;

function writeTest(){
  writeUserData(document.getElementById("username-input").value, document.getElementById("password-input").value, firebase.auth().currentUser;);
  console.log("hi i did this");
}
function writeUserData(userId, name, password) {
  console.log(name);
  console.log(password);
  firebase.database().ref('users/' + userId).set({
    username: name,
    password: password,
  });
}
