jQuery(document).ready(() => {

  // 메뉴창
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500)
  }).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500)
  })

  // 이미지 슬라이드
  setInterval(() => {
    $(".slidelist").delay(1000)
    $(".slidelist").animate({marginTop: -300});
    $(".slidelist").delay(2000)
    $(".slidelist").animate({marginTop: -600});
    $(".slidelist").delay(2000)
    $(".slidelist").animate({marginTop: 0});
    $(".slidelist").delay(2000)
  });

  // 탭 동작
  $(function() {
    $(".tabmenu>li>a").click(function() {
      $(this).parent().addClass("active").siblings().removeClass("active");
      return false;
    })
  })

  // layer popUP 
  $(".notice li:first").click(function() {
    $("#layer").addClass("active")
  });
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  })
});