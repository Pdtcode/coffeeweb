<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fullname = $_POST["fullname"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  $to = "trinhpeter12@gmail.com";
  $headers = "From: $email";
  mail($to, $subject, $message, $headers);
}
?>
