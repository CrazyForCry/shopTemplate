<?php
$f_name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];
$formcontent=" From: $name \n email: $email  \n Message: $message";
$recipient = "admin@themepure.net";
$subject = "Add Your Subject Here";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("location: thank-you.html"); 
?>