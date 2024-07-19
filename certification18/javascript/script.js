jQuery(document).ready(() => {
    // 메뉴
    $("#bg_menu").hide();
    $(".submenu").hide();
    $(".navi>li").mouseover(function() {
      $("#bg_menu").stop().slideDown(500);
      $(".submenu").stop().slideDown(500);
    }).mouseout(function() {
      $("#bg_menu").stop().slideUp(500);
      $(".submenu").stop().slideUp(500);
    })

    // 이미지 슬라이드
    setInterval(() => {
      $(".slidelist").delay(1000);
      $(".slidelist").animate({marginLeft: -1200});
      $(".slidelist").delay(2000);
      $(".slidelist").animate({marginLeft: -2400});
      $(".slidelist").delay(2000);
      $(".slidelist").animate({marginLeft: 0});
      $(".slidelist").delay(2000);
    });

    // 레이어팝업
    $(".notice li:first").click(function() {
      $("#layer").addClass("active")
    })
    $(".btn").click(function() {
      $("#layer").removeClass("active")
    })
})