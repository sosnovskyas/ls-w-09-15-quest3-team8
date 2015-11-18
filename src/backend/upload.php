<?php
// В PHP 4.1.0 и более ранних версиях следует использовать $HTTP_POST_FILES
// вместо $_FILES.

# подключаем наш класс 'watermark'
include 'api.watermark.php';
$watermark = new watermark();

# создаем объекты-изображения используя исходные файлы
# (main.jpg и watermark.png)
$main_img_obj = imagecreatefromjpeg( $_POST['bgFile']);
//$watermark_img_obj = imagecreatefrompng( $_GET['watermark'] );
//$main_img_obj = $_POST['bgFile'];
//$watermark_img_obj = $_POST['wmFile'];

# создаем изображение с водяным знаком - значение прозрачности
# альфа-канала водяного знака установим в 66%
$return_img_obj = $watermark->create_watermark( $main_img_obj, $watermark_img_obj, 66 );


# отобразим наше полученное изображение в браузере -
# но сначала сообщим ему, что это jpeg-файл
header( 'Content-Type: image/jpeg' );
header( 'Content-Disposition: inline; filename=' . $_GET['src'] );
imagejpeg( $return_img_obj, '', 50 );

//print_r($_POST['bgFile']);
print_r($main_img_obj);


$data =  $_POST['bgFile'];

list($type, $data) = explode(';', $data);
list(, $data)      = explode(',', $data);
$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data));
//$data = base64_decode($data);

file_put_contents('bg.png', $data);
?>

