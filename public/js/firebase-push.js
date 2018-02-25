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

	document.getElementById("text-input").value = '';
	document.getElementById("details-input").value = '';

}
function writeData(name, description, time, location, image){
	var newEventRef = firebase.database().ref('events/').push()
	newEventRef.set({
		eventname: name,
		eventdescription: description,
		eventtime: time,
		eventlocation: location,
		eventimage: image,
	});
}
