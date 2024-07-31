jQuery(document).ready(function() {
  // 메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500)
  });

  // 이미지슬라이드
  setInterval(function() {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({marginLeft: -991});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: -1981});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: 0});
    $(".slidelist").delay(1000);
  });

  // 모달팝업
  $(".notice ul li:first").click(function() {
    $("#modal_up").addClass("active")
  });
  $(".btn").click(function() {
    $("#modal_up").removeClass("active")
  });
})