jQuery(document).ready(function() {
  // 메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(800)
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(800)
  });

  // 이미지슬라이드
  $(".imgslide a:gt(0)").hide();
  setInterval(function() {
    $(".imgslide a:first-child").fadeOut().next("a").fadeIn().end().appendTo(".imgslide")
  }, 3000);

  // 모달
  $(".notice ul li:first-child").click(function() {
    $("#modal_up").addClass("active")
  });
  $(".btn").click(function() {
    $("#modal_up").removeClass("active")
  })
})