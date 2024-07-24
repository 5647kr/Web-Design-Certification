jQuery(document).ready(() => {
  // 메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500)
  });

  // 이미지슬라이드
  $(".imgslide a:gt(0)").hide();
  setInterval(function() {
    $(".imgslide a:first").fadeOut().next("a").fadeIn().end().appendTo(".imgslide");
  }, 3000);

  // 모달기능
  $(".notice li:first-child").click(function() {
    $("#modal_up").addClass("active")
  })
  $(".btn").click(function() {
    $("#modal_up").removeClass("active")
  });
})