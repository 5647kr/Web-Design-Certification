jQuery(document).ready(function() {
  // 메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500)
  });

  // 이미지 슬라이드
  setInterval(function() {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({marginLeft: 0})
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: "-100%"})
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: "-200%"})
    $(".slidelist").delay(2000);
  });

  // 모달
  $(".notice ul li:first-child").click(function() {
    $("#modal_up").addClass("active");
  })
  $(".btn").click(function() {
    $("#modal_up").removeClass("active")
  })
})