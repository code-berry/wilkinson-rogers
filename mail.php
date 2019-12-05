<?php
	// check content, won't fail if null
	if(isset( $_POST['name'])):
		$name = $_POST['name'];
	endif; 
	if(isset( $_POST['email'])):
		$email = $_POST['email'];
	endif; 
	if(isset( $_POST['message'])):
		$message = $_POST['message'];
	endif; 

	if(isset( $_POST['subject'])):
		$subject = $_POST['subject'];
	endif; 
	if(isset( $_POST['phone'])):
		$number= $_POST['phone'];
	endif; 

	// standard content display
	$content="From: $name \n Phone: $phone \n Email: $email \n Message: $message";

	// recipient addresses
	// will accept a string seperated by commas
	// ie $rec_list = "something@one.com, someelse@two.com"
	$recipient = "office@wilkinsonrogers.com";
	$mailheader = "From: $email \r\n";

	// builtin mail function
	mail($recipient, $subject, $content, $mailheader) or die("Error!");
	
	// redirect link
	header("Location: https://www.wilkinsonrogers.com/emailsuccess.html");
?>