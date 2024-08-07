jQuery(document).ready(() => {
  // 메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function () {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function () {
    $(this).find(".submenu").stop().slideUp(500)
  });

  // 이미지슬라이드
  setInterval(function() {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({marginTop: -688})
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginTop: -1376})
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginTop: 0})
    $(".slidelist").delay(2000);
  })
})