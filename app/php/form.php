<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
  $token = "6480457033:AAGb4nSEKY4GiTZm7-rlD1_-R7kkZI0U30k";

//Сюда вставляем chat_id
  $chat_id = "-4009212319";

//Определяем переменные для передачи данных из нашей формы
  $phone = ($_POST['phone']);

//Собираем в массив то, что будет передаваться боту
  $arr = array(
      'Телефон:' => $phone
  );

//Настраиваем внешний вид сообщения в телеграме
  foreach($arr as $key => $value) {
      $txt .= "<b>".$key."</b> ".$value."%0A";
  };

//Передаем данные боту
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
  if ($sendToTelegram) {
      echo 'Ваше сообщение получено, спасибо!';
  }

//А здесь сообщение об ошибке при отправке
  else {
      echo 'Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.';
  }

  exit();

?>
