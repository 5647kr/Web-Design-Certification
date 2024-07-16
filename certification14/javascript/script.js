jQuery(document).ready(function() {
  //메뉴
  $(".submenu").hide();
  $("#bgmenu").hide();
  $(".navi>li").mouseover(function() {
    $(".submenu").stop().slideDown(500);
    $("#bgmenu").stop().slideDown(500);
  }).mouseout(function() {
    $(".submenu").stop().slideUp(500);
    $("#bgmenu").stop().slideUp(500);
  })

  // 이미지 슬라이드
  $(".imgslide a:gt(0)").hide();
  setInterval(function() {
    $(".imgslide a:first").fadeOut().next("a").fadeIn().end().appendTo(".imgslide");
  },3000);

  // 레이어 팝업
  $(".notice li:first").click(function() {
    $("#layer").addClass("active")
  })
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  });
});