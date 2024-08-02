jQuery(document).ready(function() {
  // 메뉴
  $("#menu_bg").hide();
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(".submenu").stop().slideDown(500);
    $("#menu_bg").stop().slideDown(500);
  }).mouseout(function() {
    $(".submenu").stop().slideUp(500);
    $("#menu_bg").stop().slideUp(500);
  });

  //이미지 슬라이드
  $(".imgslide a:gt(0)").hide();
  setInterval(function() {
    $(".imgslide a:first-child").fadeOut().next("a").fadeIn().end().appendTo(".imgslide");
  }, 3000);

  (function() {
    $(".tab>ul>li>a").click(function() {
      $(this).parent().addClass("active").siblings().removeClass("active");
      return false;
    })
  })();

  $(".notice ul li:first-child").click(function() {
    $("#layer").addClass("active")
  })
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  })
})