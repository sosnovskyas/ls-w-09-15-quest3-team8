<?php
class watermark
{
    # функция, которая сливает два исходных изображения в одно
    function create_watermark() { }
    # функция для "усреднения" цветов изображений
    function _get_ave_color() { }
    # функция, которая находит ближайшие RGB-цвета для нового изображения
    function _get_image_color() { }
}


# функция, которая сливает два исходных изображения в одно
function create_watermark( $main_img_obj, $watermark_img_obj, $alpha_level = 100 )
{
    # переводим значение прозрачности альфа-канала из % в десятки
    $alpha_level/= 100;

    # расчет размеров изображения (ширина и высота)
    $main_img_obj_w = imagesx( $main_img_obj );
    $main_img_obj_h = imagesy( $main_img_obj );
    $watermark_img_obj_w = imagesx( $watermark_img_obj );
    $watermark_img_obj_h = imagesy( $watermark_img_obj );

    # определение координат центра изображения
    $main_img_obj_min_x=floor(($main_img_obj_w/2)-($watermark_img_obj_w/2));
    $main_img_obj_max_x=ceil(($main_img_obj_w/2)+($watermark_img_obj_w/2));
    $main_img_obj_min_y=floor(($main_img_obj_h/2)-($watermark_img_obj_h/2));
    $main_img_obj_max_y=ceil(($main_img_obj_h/2)+($watermark_img_obj_h/2));

    # создание нового изображения
    $return_img = imagecreatetruecolor( $main_img_obj_w, $main_img_obj_h );

    # пройдемся по исходному изображению
    for( $y = 0; $y < $main_img_obj_h; $y++ )
    {
        for ($x = 0; $x < $main_img_obj_w; $x++ )
        {
            $return_color = NULL;

            # определение истинного расположения пикселя в пределах
            # нашего водяного знака
            $watermark_x = $x - $main_img_obj_min_x;
            $watermark_y = $y - $main_img_obj_min_y;

            # выбор информации о цвете для наших изображений
            $main_rgb = imagecolorsforindex( $main_img_obj,
                imagecolorat( $main_img_obj, $x, $y ) );

            # если наш пиксель водяного знака непрозрачный
            if ($watermark_x >= 0 && $watermark_x < $watermark_img_obj_w &&
                $watermark_y >= 0 && $watermark_y < $watermark_img_obj_h )
            {
                $watermark_rbg = imagecolorsforindex( $watermark_img_obj,
                    imagecolorat( $watermark_img_obj,
                        $watermark_x,
                        $watermark_y ) );

                # использование значения прозрачности альфа-канала
                $watermark_alpha = round(((127-$watermark_rbg['alpha'])/127),2);
                $watermark_alpha = $watermark_alpha * $alpha_level;

                # расчет цвета в месте наложения картинок
                $avg_red = $this->_get_ave_color( $main_rgb['red'],
                    $watermark_rbg['red'], $watermark_alpha );
                $avg_green = $this->_get_ave_color( $main_rgb['green'],
                    $watermark_rbg['green'], $watermark_alpha );
                $avg_blue = $this->_get_ave_color( $main_rgb['blue'],
                    $watermark_rbg['blue'], $watermark_alpha );

                # используя полученные данные, вычисляем индекс цвета
                $return_color = $this->_get_image_color(
                    $return_img, $avg_red, $avg_green, $avg_blue );

                # если же не получиться выбрать цвет, то просто возьмем
                # копию исходного пикселя
            } else { $return_color = imagecolorat( $main_img_obj, $x, $y ); }
            # из полученных пикселей рисуем новое изображение
            imagesetpixel($return_img, $x, $y, $return_color );
        }
    }
    # отображаем изображение с водяным знаком
    return $return_img;

} # конец функции create_watermark()
#
## усреднение двух цветов с учетом прозрачности альфа-канала
function _get_ave_color( $color_a, $color_b, $alpha_level )
{
    return round((($color_a*(1-$alpha_level))+($color_b*$alpha_level)));
}
# возвращаем значения ближайших RGB-составляющих нового рисунка
function _get_image_color($im, $r, $g, $b)
{
    $c=imagecolorexact($im, $r, $g, $b);
    if ($c!=-1) return $c;
    $c=imagecolorallocate($im, $r, $g, $b);
    if ($c!=-1) return $c;
    return imagecolorclosest($im, $r, $g, $b);
}
?>