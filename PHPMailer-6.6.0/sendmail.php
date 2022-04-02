<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail= new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru','phpmailer/language/');
    $mail->IsHTML(true);

    //от кого письмо 
$mail->setFrom('s.firsov1985@gmail.com');
//кому отправить 
$mail->addAddress ('s.firsov1985mcc@gmail.com');
//тема письма 
$mail->Subject = 'Привет! Это тестовое письмо';

//Тело письма 
$body = '<h1>тестовое письмо</h1>';

$mail->Body = $Body;

if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>
