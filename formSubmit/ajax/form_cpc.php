<?php

/* Здесь проверяется существование переменных */
if (isset($_POST['contact_name'])) {
    $contact_name = $_POST['contact_name'];
} else {
    $contact_name = "";
}
if (isset($_POST['contact_tel'])) {
    $contact_tel = $_POST['contact_tel'];
} else {
    $contact_tel = "";
}

if (empty($contact_tel)) {
    die();
}

/* Сюда впишите свою эл. почту */
$address = "mail@gmail.com";

/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Заявка с сайта <site>:\n";
if ($contact_name != '') {
    $mes .= "Имя: $contact_name\n";
}
if ($contact_tel != '') {
    $mes .= "Телефон: $contact_tel\n";
}


/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub = 'Заявка с сайта'; //сабж
$email = '<from>'; // от кого

// Send email
$send = mail($address, $sub, $mes, "Content-type:text/plain; charset = utf-8\r\nFrom:$email");
