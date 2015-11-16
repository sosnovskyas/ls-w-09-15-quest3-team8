<?php
require_once 'vendor/autoload.php';
use WideImage\WideImage as WideImage;

$background = WideImage::load($_POST['bgFile']);
$watermark = WideImage::load($_POST['wmFile']);

$wmParam = getimagesize($_POST['wmFile']); // �������� ������� ���������� � ��c���
$wmWidth = $wmParam[0]; //  ������
$wmNewWidth = $wmWidth * $_POST['wmScale'];
//�������� ������ � ����� � ����� �������� ������
$resized = $watermark->resize($wmNewWidth);


if ($_POST['positionX'] == '') {
    $x = 0;
}else{
    $x = $_POST['positionX'];
}

if ($_POST['positionY'] == '') {
    $y = 0;
}else{
    $y = $_POST['positionY'];
}

$background->merge($resized, $x, $y, $_POST['opacity'])->saveToFile('new.jpg');;

//����������� �����, ������ ������������ � ������� �� �����
$background->merge($resized, $x, $y, $_POST['opacity'])->saveToFile('result.jpg');


if (file_exists('result.jpg')) {
    echo json_encode('result.jpg');
}