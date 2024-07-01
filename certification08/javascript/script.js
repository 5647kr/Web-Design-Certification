jQuery(document).ready(function() {

  // 메뉴
  $(".navi>li").mouseover(function() {
    $(".submenu").stop().slideDown(500);
    $("#menu_bg").stop().slideDown(500);
  }).mouseout(function() {
    $(".submenu").stop().slideUp(500);
    $("#menu_bg").stop().slideUp(500);
  });

  // 이미지 슬라이드
  setInterval(function() {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({marginTop: -400});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginTop: -800});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginTop: 0});
    $(".slidelist").delay(2000);
  });

  // 팝업
  $(".notice li:first").click(function() {
    $("#layer").addClass("active");
  })
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  })
});