jQuery(document).ready(function() {
  // 이미지 슬라이드 방법1 : fadeIn & fadeOut

  // certification03
    $(".imgslide1 a:gt(0)").hide();
    setInterval(function() {
      $(".imgslide1 a:first-child").fadeOut().next("a").fadeIn().end().appendTo(".imgslide1");
    }, 3000)

  // certification06
    $(".imgslide2 a:gt(0)").hide();
    setInterval(function() {
      $(".imgslide2 a:first-child").fadeOut()
      .next("a").fadeIn()
      .end().appendTo(".imgslide2")
    }, 3000);

  // certification07
  $(".imgslide3 a:gt(0)").hide();
  setInterval(() => {
    $(".imgslide3 a:first").fadeOut()
    .next("a").fadeIn()
    .end().appendTo(".imgslide3");
  }, 3000);

  // 연습 
  $(".imgslide4 a:gt(0)").hide();
  setInterval(() => {
    $(".imgslide4 a:first").fadeOut().next("a").fadeIn()
    .end().appendTo(".imgslide4");
  }, 3000)


// 이미지 슬라이드 방법2 : 상하 좌우 이동
/* certification04 */
setInterval(() => {
  $(".slidelist5").delay(1000)
  $(".slidelist5").animate({marginTop: -300});
  $(".slidelist5").delay(2000)
  $(".slidelist5").animate({marginTop: -600});
  $(".slidelist5").delay(2000)
  $(".slidelist5").animate({marginTop: 0});
  $(".slidelist5").delay(2000)
});
/* certification02 */
setInterval(() => {
  $(".slidelist6").delay(2000);
  $(".slidelist6").animate({marginLeft: -1200});
  $(".slidelist6").delay(2000);
  $(".slidelist6").animate({marginLeft: -2400});
  $(".slidelist6").delay(2000);
  $(".slidelist6").animate({marginLeft: 0});
  $(".slidelist6").delay(2000);
});

// 연습
setInterval(function() {
  $(".slidelist7").delay(1000);
  $(".slidelist7").animate({marginTop: -300});
  $(".slidelist7").delay(2000);
  $(".slidelist7").animate({marginTop: -600});
  $(".slidelist7").delay(2000);
  $(".slidelist7").animate({marginTop: 0});
  $(".slidelist7").delay(2000);
})

setInterval(function() {
  $(".slidelist8").delay(1000);
  $(".slidelist8").animate({marginLeft: -1200});
  $(".slidelist8").delay(2000);
  $(".slidelist8").animate({marginLeft: -2400});
  $(".slidelist8").delay(2000);
  $(".slidelist8").animate({marginLeft: 0});
  $(".slidelist8").delay(2000);
})

// 탭 메뉴
// certification11
$(function() {
  $(".tab>ul>li>a").click(function() {
    $(this).parent().addClass("active").siblings().removeClass("active");
    return false;
  })
})
});