function showNewEventCard() {
  $("createEventModal").modal('show');
  document.getElementById("createEventModal").style.visibility='visible';
}

$( document ).ready(function() {
    isLoggedIn();
});
