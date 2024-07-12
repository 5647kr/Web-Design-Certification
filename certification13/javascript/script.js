jQuery(document).ready(function() {
  // 메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500);
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500);
  });

  // 이미지 슬라이드
  $(".imgslide a:gt(0)").hide();
  setInterval(function() {
    $(".imgslide a:first").fadeOut()
    .next("a").fadeIn()
    .end().appendTo(".imgslide");
  }, 3000);

  // 탭 메뉴
  $(function() {
    $(".tabmenu>ul>li>a").click(function() {
      $(this).parent().addClass("active").siblings().removeClass("active")
      return false;
    })
  });

  // 레이어 팝업
  $(".notice ul li:first").click(function() {
    $("#layer").addClass("active")
  })
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  });
});