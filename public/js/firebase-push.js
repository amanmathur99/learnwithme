function writeTest(){
	var user = firebase.auth().currentUser.uid;
	var username = document.getElementById("username-input").value;
	var password = document.getElementById("password-input").value;
  	writeUserData(user, username, password);
}
function writeUserData(userId, name, password) {
  console.log(userId);
  console.log(password);
  console.log(name);
  firebase.database().ref('users/' + userId).set({
    username: name,
    password: password,
  });
}
function writeDataTest(){
	var name = document.getElementById("text-input").value;
	var details = document.getElementById("details-input").value;
	writeData(name, details);
}
function writeData(name, details){
	var newEventRef = firebase.database().ref('events/').push()
	newEventRef.set({
		eventname: name,
		details: details,
	});
}