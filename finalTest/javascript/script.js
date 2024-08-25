jQuery(document).ready(function() {
  // 메뉴
  $(".submenu").hide();
  $(".nav>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500);
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500);
  });

  // 이미지슬라이드
  setInterval(function() {
    $(".imgslide ul").delay(1000);
    $(".imgslide ul").animate({marginLeft: "-100%"});
    $(".imgslide ul").delay(2000);
    $(".imgslide ul").animate({marginLeft: "-200%"});
    $(".imgslide ul").delay(2000);
    $(".imgslide ul").animate({marginLeft: 0});
    $(".imgslide ul").delay(2000);
  });

  // 팝업
  $(".notice ul li:first-child").click(function() {
    $("#modal_up").addClass("active")
  });
  $(".btn").click(function() {
    $("#modal_up").removeClass("active")
  })
});