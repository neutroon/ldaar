const links = document.querySelectorAll('.links')
const main = document.querySelector('.main');
const about = document.querySelector('.about');


links[0].addEventListener ('click', function (){
    main.scrollIntoView({behavior:'smooth', block:'center'});
})
links[1].addEventListener ('click', function (){
    about.scrollIntoView({behavior:'smooth', block:'center'});
})

//chat button

    var url = 'text.text';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
  "enabled":true,
  "chatButtonSetting":{
      "backgroundColor":"#4dc247",
      "ctaText":"تواصل معنا",
      "borderRadius":"25",
      "marginLeft":"0",
      "marginBottom":"50",
      "marginRight":"50",
      "position":"right"
  },
  "brandSetting":{
      "brandName":"الدار للتسويق العقاري",
      "brandSubTitle":"يتم الرد عادة في غضون ساعة.",
      "brandImg":"https://cdn.clare.ai/wati/images/WATI_logo_square_2.png",
      "welcomeText":"😀أهلاً!\nكيف يمكنني مساعدك؟",
      "messageText":"مرحبًا ، لدي سؤال",
      "backgroundColor":"#0a5f54",
      "ctaText":"Start Chat",
      "borderRadius":"25",
      "autoShow":false,
      "phoneNumber":"201069085086"
  }
};
    s.onload = function() {
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
