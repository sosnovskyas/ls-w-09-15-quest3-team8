(function () {
    $('.position-blocks__link').on('click', function(e){
        e.preventDefault();
        var position = $(this).data('position'),
            canvas_watermark = $('#canvas_watermark'),
            canvas = canvas_watermark.parent('#canvas'),
            canvas_hor = canvas.width(),
            canvas_ver = canvas.height(),
            h_size = Math.floor(canvas_hor / 3),
            v_size = Math.floor(canvas_ver / 3);
        // Первое время будет порядочно консоль-логов, для проверки. Потом уберу!
        console.log(position + ' ' + canvas);
        console.log(h_size);
        console.log(v_size);
        switch (position) {
            case 'top-left':
                canvas_watermark.css({
                    'top': 0,
                    'left': 0
                });
        }
    });
}());