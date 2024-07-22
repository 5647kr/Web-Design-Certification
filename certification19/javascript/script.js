jQuery(document).ready(function() {
  // 탭메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500)
  })

  // 이미지슬라이드
  $(".imgslide a:gt(0)").hide();
  setInterval(() => {
    $(".imgslide a:first-child").fadeOut().next("a").fadeIn().end().appendTo(".imgslide")
  }, 3000);

  // 탭기능
  $(".tab>ul>li>a").click(function() {
    $(this).parent().addClass("active").siblings().removeClass("active");
    return false;
  })

  // 레이어팝업
  $(".notice ul li:first-child").click(function() {
    $("#layer").addClass("active")
  })
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  })
})