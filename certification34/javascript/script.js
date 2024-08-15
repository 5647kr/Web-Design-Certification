jQuery(document).ready(function() {
  // 메뉴
  $("#bgMenu").hide();
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $("#bgMenu").stop().slideDown(700)
    $(".submenu").stop().slideDown(700)
  }).mouseout(function() {
    $("#bgMenu").stop().slideUp(700)
    $(".submenu").stop().slideUp(700)
  });

  // 이미지슬라이드
  setInterval(function() {
    $(".imgslide ul").delay(1000);
    $(".imgslide ul").animate({marginTop: -350});
    $(".imgslide ul").delay(2000);
    $(".imgslide ul").animate({marginTop: -700});
    $(".imgslide ul").delay(2000);
    $(".imgslide ul").animate({marginTop: 0});
    $(".imgslide ul").delay(2000);
  });

  // 모달
  $(".notice ul li:first-child").click(function() {
    $("#modal_up").addClass("active")
  });
  $(".btn").click(function() {
    $("#modal_up").removeClass("active")
  })
})