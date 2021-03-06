function writeTest(){
	var user = firebase.auth().currentUser.uid;
	var username = document.getElementById("username-input").value;
	var password = document.getElementById("password-input").value;
  	writeUserData(user, username, password);
}
function isLoggedIn(){
	var loggedin = false;
	user = firebase.auth().currentUser;
	if (user) {
		document.getElementById("login").classList.add('hide');
		document.getElementById("signout").classList.remove('hide');
	    loggedin = true;
	} else {
	    document.getElementById("login").classList.remove('hide');
	    document.getElementById("signout").classList.add('hide');
	}
	return loggedin;
}
function signOut(){
	firebase.auth().signOut().then(function() {
  		console.log('Signed Out');
  		document.getElementById("login").classList.remove('hide');
	    document.getElementById("signout").classList.add('hide');

	    $("#signedout").fadeIn();
		$("#signedout").fadeOut(3000);
	}, function(error) {
	  console.error('Sign Out Error', error);
	});
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
	var name = document.getElementById("eventNameInput").value;
	var description = document.getElementById("eventDescriptionInput").value;
	var time = document.getElementById("eventTimeInput").value;
	var location = document.getElementById("eventLocationInput").value;
	var image = document.getElementById("eventImageInput").value;

	if(name != '' && description != '' && time != '' && location != '' && image != ''){
		writeData(name, description, time, location, image);

		document.getElementById("eventNameInput").value = '';
		document.getElementById("eventDescriptionInput").value = '';
		document.getElementById("eventTimeInput").value = '';
		document.getElementById("eventLocationInput").value = '';
		document.getElementById("eventImageInput").value = '';

		document.getElementById("eventFailure").classList.add('hide');
		document.getElementById("eventSuccessful").classList.remove('hide');
	}else{
		document.getElementById("eventFailure").classList.remove('hide');
		document.getElementById("eventSuccessful").classList.add('hide');
	}
}
function closeSuccess(){
	document.getElementById("eventSuccessful").classList.add('hide');
	document.getElementById("eventFailure").classList.add('hide');
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
