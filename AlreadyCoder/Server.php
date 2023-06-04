<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $data = "Naam: " . $name . "\nE-mailadres: " . $email . "\nBericht: " . $message . "\n\n";

  $file = fopen("berichten.txt", "a"); // Open het tekstbestand in "append" modus
  fwrite($file, $data); // Schrijf de gegevens naar het bestand
  fclose($file); // Sluit het bestand

  echo "Bedankt! Uw bericht is verzonden.";
}
?>
