jQuery(document).ready(function() {
  // 메뉴 토글
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500)
  });

  // 이미지 효과
  $(".imgslide a:gt(0)").hide();
  setInterval(() => {
    $(".imgslide a:first-child").fadeOut(1000).next("a").fadeIn(1000).end().appendTo(".imgslide")
  }, 3000);

  // modal
  $(".notice li:first").click(function() {
    $("#modal").addClass("active");
  });
  $(".btn").click(function() {
    $("#modal").removeClass("active");
  });
});