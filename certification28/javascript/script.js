jQuery(document).ready(() => {
  // 메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function () {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function () {
    $(this).find(".submenu").stop().slideUp(500)
  });

  // 이미지슬라이드
  setInterval(function() {
    let height1 = `-${window.innerHeight - 100}px`;
    let height2 = `-${(window.innerHeight - 100) * 2}px`;

    $(".imgslide ul").delay(1000);
    $(".imgslide ul").animate({marginTop: height1})
    $(".imgslide ul").delay(2000);
    $(".imgslide ul").animate({marginTop: height2})
    $(".imgslide ul").delay(2000);
    $(".imgslide ul").animate({marginTop: 0})
    $(".imgslide ul").delay(2000);
  });

  // 모달
  $(".notice ul li:first-child").click(function() {
    $("#modal_up").addClass("active")
  })
  $(".btn").click(function() {
    $("#modal_up").removeClass("active")

  })
})