jQuery(document).ready(function() {
  // 메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500);
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500);
  });

  // 이미지 슬라이드
  setInterval(() => {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({marginTop: -300});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginTop: -600});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginTop: 0});
    $(".slidelist").delay(2000);
  });

  // 레이어
  $(".notice li:first").click(function() {
    $("#layer").addClass("active");
  })
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  })

})