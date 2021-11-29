// adding an alert to clicking the phone Icon in mobile mode to simulate
// placing a phone call

let phoneIcon = document.querySelector("#callMe");

phoneIcon.addEventListener("click", function (e) {
  alert(
    "Thank you for choosing to call Gary's Blue Diner, this is a mock up and no actual phone call will be placed"
  );
});