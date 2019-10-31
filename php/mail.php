<?php     
	$to_email = 'emailQueRecibiraLaInformacion@blablabla.com';
	$subject = 'Franco-fit Quizz';
	$message = "$_POST['name'] $_POST['lastName'] ha realizado el QUIZZ. E-mail: $_POST['email']. Peso: $_POST['weight'], Altura: $_POST['height'].";
	$headers = 'From: noreply@franco-fit.com';
	mail($to_email,$subject,$message,$headers);
?>