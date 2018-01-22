var mySwiper = new Swiper(".container-banner",{
    direction:"horizontal",/*横向滑动*/
    loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/
    autoplay:{
        delay:2000
    },/*每隔3秒自动播放*/
    pagination: {
        el: '.swiper-pagination'
    }
});
var swiperT = new Swiper('.container-toutiao', {
    noSwiping : true,
    loop: true,
    direction: 'vertical',
    autoplay: {
        delay: 2000//2秒切换一次
    }
});
var search=document.getElementById("search-placeholder");
search.onclick=function sch() {
    location.href="search.html";
};
sch();