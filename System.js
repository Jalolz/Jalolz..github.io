document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Voorkom dat het formulier wordt verzonden

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var mailtoLink = "jaielcamps246@gmail.com" + "?subject=" + encodeURIComponent("Bericht van " + name + " (" + email + ")") + "&body=" + encodeURIComponent(message);

  window.location.href = mailtoLink;
});
