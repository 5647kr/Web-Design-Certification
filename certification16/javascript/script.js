jQuery(document).ready(function () {
  // 메뉴
  $("#bg_wrap").hide();
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(".submenu").stop().slideDown(500);
    $("#bg_wrap").stop().slideDown(500);
  }).mouseout(function () {
    $(".submenu").stop().slideUp(500);
    $("#bg_wrap").stop().slideUp(500);
  })

  // 이미지슬라이드
  setInterval(function() {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({marginTop: -300});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginTop: -600});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginTop: 0});
    $(".slidelist").delay(2000);
  });

  // 모달
  $(".notice ul li:first").click(function() {
    $("#modal").addClass("active");
  })
  $(".btn").click(function() {
    $("#modal").removeClass("active")
  });
})