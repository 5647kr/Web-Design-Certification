jQuery(document).ready(function() {
  // 메뉴
  $(".navi>li").mouseover(function() {
    $(".submenu").stop().slideDown(500);
    $("#bg_menu").stop().slideDown(500);
  }).mouseout(function() {
    $(".submenu").stop().slideUp(500);
    $("#bg_menu").stop().slideUp(500);
  })

  // 이미지 슬라이드
  setInterval(function() {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({marginLeft: -1200});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: -2400});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: 0});
    $(".slidelist").delay(2000);
  });

  // 모달
  $(".notice li:first").click(function() {
    $("#modal").addClass("active");
  })
  $(".btn").click(function() {
    $("#modal").removeClass("active");
  })
});