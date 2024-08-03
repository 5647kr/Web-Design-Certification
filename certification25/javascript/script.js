jQuery(document).ready(function() {
// 메뉴
  $(".submenu").hide();
  $("#bg_menu").hide();
  $(".navi>li").mouseover(function() {
    $(".submenu").stop().slideDown(500);
    $("#bg_menu").stop().slideDown(500);
  }).mouseout(function() {
    $(".submenu").stop().slideUp(500);
    $("#bg_menu").stop().slideUp(500);
  });

  // 이미지슬라이드
  $(".imgslide a:gt(0)").hide();
  setInterval(() => {
    $(".imgslide a:first-child").fadeOut().next("a").fadeIn().end().appendTo(".imgslide")
  }, 3000);

  // 탭기능
  (function() {
    $(".tab>ul>li>a").click(function() {
      $(this).parent().addClass("active").siblings().removeClass("active");
      return false;
    })
  })();

  // 레이어 팝업
  $(".notice ul li:first-child").click(function() {
    $("#layer").addClass("active")
  });
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  });
});