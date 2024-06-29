jQuery(document).ready(function() {

  // 메뉴 토글
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500)
  });


  // 이미지 슬라이드
  $(".imgslide a:gt(0)").hide();
  setInterval(() => {
    $(".imgslide a:first").fadeOut()
    .next("a").fadeIn()
    .end().appendTo(".imgslide");
  }, 3000);

  // 공지사항 갤러리 전환탭
  $(function() {
    $(".tabmenu>li>a").click(function() {
      $(this).parent().addClass("active")
      .siblings().removeClass("active");
      return false;
    });
  });

  // 모달

  $(".notice li:first").click(function() {
    $("#modal").addClass("active")
  });
  $(".btn").click(() => {
    $("#modal").removeClass("active")
  });
});