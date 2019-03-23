<?php
if(isset($_POST['UserEmail'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "itai.einati@gmail.com";
    $email_subject = "macabi new msg";

 
    $UserEmail = $_POST['UserEmail']; // required
	$UserEmail2 = $_POST['$MsgBody']; // required
	$UserEmail3 = $_POST['$FullName']; // required
    $FullName = $_POST['$phone']; // required
 
    $email_message = "שלום אדמין.<br><br>";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
	
	$email_message = '<html><body>';
	$email_message .= '<div  dir="rtl">';
	$email_message .= "מאתר מכבי התקבלה ההודעה הבאה:<br>".clean_string($MsgBody)."<br><br>";
	$email_message .= "ההודעה התקבלה ממשתמש בשם: <br>".clean_string($FullName)."<br>";
	$email_message .= '<br>';
	$email_message .= "כתובת דואר אלקטרוני לחזרה: <br>".clean_string($UserEmail)."<br>";
	$email_message .= '<br>';
	$email_message .= "טלפון לחזרה: <br>".clean_string($phone)."<br>";
	$email_message .= 'יש לחזור ללקוח תוך שני ימי עסקים:<br><br>';
	$email_message .= '</div></body></html>';

// create email headers
$headers = 'From: '.$UserEmail."\r\n".
'Reply-To: '.$UserEmail."\r\n" . "MIME-Version: 1.0\r\n". "Content-Type: text/html; charset=ISO-8859-1\r\n".
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 <!-- Thank you for contacting us. We will be in touch with you very soon. -->

 
<?php
 
}
?>
