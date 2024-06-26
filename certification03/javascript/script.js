jQuery(document).ready(function() {
  
  // 메뉴창
  $(".navi>li").mouseover(function() {
    $(".submenu").stop().slideDown(500)
    $("#menu_bg").stop().slideDown(500)
  }).mouseout(function() {
    $(".submenu").stop().slideUp(500)
    $("#menu_bg").stop().slideUp(500)
  });

  // 이미지 슬라이드
  $(".imgslide a:gt(0)").hide();
  setInterval(function() {
    $(".imgslide a:first-child").fadeOut().next("a").fadeIn().end().appendTo(".imgslide");
  }, 3000)

  // 모달

  $(".notice li:first").click(function() {
    $("#modal").addClass("active");
  });
  $(".btn").click(function() {
    $("#modal").removeClass("active");
  });
});