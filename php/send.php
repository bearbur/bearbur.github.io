<?php
$post = (!empty($_POST)) ? true : false;
if($post) {
  $YourName = $_POST['YourName'];
  $YourEmail = $_POST['YourEmail'];
  $YourPhone = $_POST['YourPhone'];
  $YourMessage = $_POST['YourMessage'];
  $OurAddress = "info@saltcatering.ru"/*"info@saltcatering.ru"*/;
  $sub = "Сообщение от ".$YourName;
  $mes = "Имя: ".$YourName."\n\nE-mail: ".$YourEmail."\n\nТелефон: ".$YourPhone."\n\nСообщение: ".$YourMessage."\n\n";
  $send = mail($OurAddress, $sub, $mes);
  if($send) {echo "<p>Cообщение успешно отправлено.   </p><br><p>Мы скоро свяжемся с вами!</p>";}
  else{
    echo "<p>Cообщение не отправленно.</p><br><p> Пожалуйста, попрбуйте еще раз</p>";
  }
}
?>
