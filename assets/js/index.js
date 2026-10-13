// 헤더 스크롤
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  console.log(scrollTop);

  if (scrollTop > 100) {
    $("#header").addClass("active");
  } else {
    $("#header").removeClass("active");
  }
});

// 모바일 메뉴
$("#mNav button").click(function () {
  $("#mNav nav").toggleClass("show");
});

// 푸터메뉴
// $(".firstMenu").click(function () {
//   $(this).next(".footer_dropdown").toggleClass("slide");
// });

$(".firstMenu").click(function () {
  $(this).next(".footer_dropdown").slideToggle(300);
});
