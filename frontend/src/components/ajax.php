<?php

$tg_bot_token = "5690970767:AAHcn4ScVmd-PkguZIZnInzxk6_LWD0Q7rU";
$chat_id = "-802654452";
$text = "";

$user_name = $_POST["user_name"];
$user_phone = $_POST["user_number"];

$arr = array(
    "Имя клиента: " => $user_name,
    "Номер клиента: " => $user_phone
);

foreach ($arr as $key => $value) {
    $text .= "<b>" . $key . "</b>" . $value . "%0A";
}

fopen("https://api.telegram.org/bot{$tg_bot_token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$text}", "r");

header("Location: samuryq.kz");

?>