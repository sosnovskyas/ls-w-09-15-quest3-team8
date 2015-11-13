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
            imgWrap = $('#canvas'),
            watermark = imgWrap.find('#canvas_watermark'),
            position = watermark.position();

        if (watermark.length) {
            $('#canvas_watermark').draggable({
                cursor: "move",
                containment: '#canvas_img',
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

