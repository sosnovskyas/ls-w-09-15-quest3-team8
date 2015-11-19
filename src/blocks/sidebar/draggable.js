var dragModule = (function() {

    var init = function() {
        _setUpListners();
    };

    var _setUpListners = function() {
        $(document).ready(_dragWatermark);
    };

    var _dragWatermark = function() {
        var inputX = $('#spinner_x'),
            inputY = $('#spinner_y'),
            imgСont = $('.js-canvas__watermark-container'),
            watermark = imgСont.find('.js-canvas__watermark'),
            position = watermark.position();

        if (watermark.length) {
            $('.js-canvas__watermark').draggable({
                cursor: "move",
                containment: '.js-canvas__watermark-container',
                drag: function(event, ui) {
                    inputX.val(ui.position.left);
                    inputY.val(ui.position.top);
                }
            });
        }
    };
    return {
        init: init
    };

})();
dragModule.init();

