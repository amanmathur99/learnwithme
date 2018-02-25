function outputEvents(callback){
	var eventsRef = firebase.database().ref('events/');

	var events = [];

	var rootRef = firebase.database().ref();
	var urlRef = rootRef.child("events/");
	
	urlRef.once("value", function(snapshot) {
	  snapshot.forEach(function(child) {
	  	indEventArr = [];
	    child.forEach(function(child){
	    	indEventArr.push(child.val());
	    });
	    events.push(indEventArr);
	  });
	  callback(events);
	});
}