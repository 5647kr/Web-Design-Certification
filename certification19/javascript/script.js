jQuery(document).ready(function() {
  // 탭메뉴
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500)
  });

  // 이미지슬라이드
  $(".imgslide a:gt(0)").hide()
  setInterval(function() {
    $(".imgslide a:first-child").fadeOut().next("a").fadeIn().end().appendTo(".imgslide")
  }, 3000)

  // 탭기능
  $(".tab ul li a").click(function() {
    $(this).parent().addClass("active").siblings().removeClass("active")
    return false;
  })

  // 레이어 팝업
  $(".notice ul li a:first-child").click(function() {
    $("#layer").addClass("active")
  })
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  });
})