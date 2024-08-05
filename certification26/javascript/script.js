jQuery(document).ready(function() {
  // 메뉴
  $(".submenu").hide();
  $("#menu_bg").hide();
  $(".navi>li").mouseover(function() {
    $(".submenu").stop().slideDown(500);
    $("#menu_bg").stop().slideDown(500);
  }).mouseout(function() {
    $(".submenu").stop().slideUp(500);
    $("#menu_bg").stop().slideUp(500);
  });

  // 이미지슬라이드
  $(".imgslide a:gt(0)").hide();
  setInterval(() => {
    $(".imgslide a:first-child").fadeOut().next("a").fadeIn().end().appendTo(".imgslide")
  }, 3000);

  // 레이어
  $(".notice ul li:first-child").click(function() {
    $("#layer").addClass("active")
  });
$(".btn").click(function() {
    $("#layer").removeClass("active")
  });
})