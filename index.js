$(document).ready(function() {
  var mySwiper = new Swiper(".swiper-container", {
    loop: true, // 循环模式选项
    autoplay: {
      disableOnInteraction: false,
    }, // 自动播放
    // 分页器
    pagination: {
      el: ".swiper-pagination"
    },
  });
});
