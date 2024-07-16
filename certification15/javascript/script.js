jQuery(document).ready(function() {
  // 메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(".submenu").stop().slideDown(500)
  }).mouseout(function() {
    $(".submenu").stop().slideUp(500)
  });

  // 슬라이드
  setInterval(function() {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({marginLeft: -1200});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: -2400});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: 0});
    $(".slidelist").delay(1000);
  })

  //텝 기능
  $(function() {
    $(".tab>ul>li>a").click(function() {
      $(this).parent().addClass("active").siblings().removeClass("active")
      return false;
    });
  });

  // 레이어 팝업
  $(".notice ul li:first").click(function() {
    $("#layer").addClass("active")
  })
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  });
})