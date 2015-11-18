<?php

# подключаем наш класс 'watermark'
include 'api.watermark.php';
$watermark = new watermark();

# создаем объекты-изображения используя исходные файлы
# (main.jpg и watermark.png)
$main_img_obj = imagecreatefromjpeg( $_GET['main'] );
$watermark_img_obj = imagecreatefrompng( $_GET['watermark'] );

# создаем изображение с водяным знаком - значение прозрачности
# альфа-канала водяного знака установим в 66% 
$return_img_obj = $watermark->create_watermark( $main_img_obj, $watermark_img_obj, 66 );

# отобразим наше полученное изображение в браузере -
# но сначала сообщим ему, что это jpeg-файл 
header( 'Content-Type: image/jpeg' );
header( 'Content-Disposition: inline; filename=' . $_GET['src'] );
imagejpeg( $return_img_obj, '', 50 );

?> 