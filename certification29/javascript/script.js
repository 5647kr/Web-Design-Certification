jQuery(document).ready(function() {
  // 메뉴
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500)
  });

  // 이미지 슬라이드
  setInterval(function() {
    // 높이를 계산해서 변수에 저장
    var height1 = `-${window.innerHeight - 100}px`;
    var height2 = `-${(window.innerHeight - 100) * 2}px`;

    $(".imgslide ul").animate({marginTop: height1}, 1000).delay(2000);
    $(".imgslide ul").animate({marginTop: height2}, 1000).delay(2000);
    $(".imgslide ul").animate({marginTop: "0"}, 1000).delay(2000);
}, 6000);



  // 레이어 팝업
  $(".notice li:first-child").click(function() {
    $("#layer").addClass("active")
  })
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  })
})