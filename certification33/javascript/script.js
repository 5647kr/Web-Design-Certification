jQuery(document).ready(function() {
  // 메뉴
  $("#bgMenu").hide();
  $(".submenu").hide();
  $(".navi>li").mouseover(function() {
    $("#bgMenu").stop().slideDown(800);
    $(".submenu").stop().slideDown(800);
  }).mouseout(function() {
    $("#bgMenu").stop().slideUp(800);
    $(".submenu").stop().slideUp(800);
  });

  setInterval(function() {
    $(".imgslide ul").delay(1000);
    $(".imgslide ul").animate({marginLeft: "-100%"});
    $(".imgslide ul").delay(2000);
    $(".imgslide ul").animate({marginLeft: "-200%"});
    $(".imgslide ul").delay(2000);
    $(".imgslide ul").animate({marginLeft: 0});
    $(".imgslide ul").delay(2000);
  });

  $(function() {
    $(".tab>ul>li>a").click(function() {
      $(this).parent().addClass("active").siblings().removeClass("active");
      return false;
    })
  })

  $(".notice li:first-child").click(function() {
    $("#layer").addClass("active")
  });
  $(".btn").click(function() {
    $("#layer").removeClass("active")
  })
})