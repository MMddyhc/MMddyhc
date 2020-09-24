<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/medias/飞机.png");
         document.title = 'ヽ(●-`Д´-)ノ你要玩捉迷藏嘛';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/medias/飞机.png");
         document.title = 'ლ(°◕‵ƹ′◕ლ)抓到你了' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });

