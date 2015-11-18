//$('#vk_share_button').innerHTML = VK.Share.button('http://mysite.com', {type: 'link'});


//document.write(VK.Share.button({url: 'http://mysite.com', title: 'Мой классный сайт'}, {type: 'custom', text: '<img src="http://vk.com/images/vk32.png" />'}));


// FB

(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));