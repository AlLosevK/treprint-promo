<?php
  /*получаем значения полей из формы*/
  $phone = $_POST['phone'];

  /*функция для создания запроса на сервер Telegram */
  function parser($url){
      $curl = curl_init();
      curl_setopt($curl, CURLOPT_URL, $url);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
      $result = curl_exec($curl);
      if($result == false){
        echo "Ошибка отправки запроса: " . curl_error($curl);
        return false;
      }
      else{
        return true;
      }
  }

  /*собираем сообщение*/
  $message .= "Принимай лида в туза";
  $message .= "Телефон: ".$phone;

  /*токен который выдаётся при регистрации бота */
  $token = "6480457033:AAGb4nSEKY4GiTZm7-rlD1_-R7kkZI0U30k";
  /*идентификатор группы*/
  $chat_id = "-4009212319";
  /*делаем запрос и отправляем сообщение*/
  parser("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}");
?>
