$('#language__rus').on('click', function(e){
    e.preventDefault();
    $("[data-translate]").jqTranslate('index', {forceLang: 'ru'} );
    // Вкладка браузера. Тут плагин по переводу бессилен, приходится ручками
    document.title = "Генератор водяных знаков";
});


$('#language__eng').on('click', function(e){
    e.preventDefault();
    $("[data-translate]").jqTranslate('index', {forceLang: 'en'});
    document.title = "Watermarks generator";
});