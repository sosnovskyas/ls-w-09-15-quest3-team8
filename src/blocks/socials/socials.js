// FB

$('.fb').on('click', function(e){
        e.preventDefault;
        window.open('https://www.facebook.com/sharer/sharer.php?u=http://sosnovskyas.ru', '_blank', 'toolbar=0,location=0,menubar=0');
});

// Twitter - размеры окна, к сожалению, задаем кастомно

$('.tw').on('click', function(e){
        e.preventDefault;
        window.open('https://twitter.com/intent/tweet?url=http%3A%2F%2Fsosnovskyas.ru&text=%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%20%D0%B2%D0%BE%D0%B4%D1%8F%D0%BD%D1%8B%D1%85%20%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%B2', '_blank', 'toolbar=0,location=0,menubar=0,height=300,width=900');
});

// VK

$('.vk').on('click', function(e){
        e.preventDefault;
        window.open('http://vk.com/share.php?url=http://sosnovskyas.ru', '_blank', 'toolbar=0,location=0,menubar=0');
});