jQuery(document).ready(function() {
  // 메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500)
  })

  // 이미지 슬라이드
  setInterval(function() {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({marginTop: -400})
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginTop: -800})
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginTop: 0})
    $(".slidelist").delay(2000);
  });

  // 탭기능
  (function() {
    $(".tab>ul>li>a").click(function() {
      $(this).parent().addClass("active").siblings().removeClass("active")
      return false;
    })
  })();

  // 레이어팝업
  $(".notice>ul>li>a:first-child").click(function() {
    $("#layer").addClass("active")
  })
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  })
})