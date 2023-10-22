// document.body.classList.add(localStorage.getItem(""))
(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 });
    return false;
  });

  // // Modal Video
  // var $videoSrc;
  // $(".btn-play").click(function () {
  //   $videoSrc = $(this).data("src");
  // });
  // // console.log($videoSrc);
  // $("#videoModal").on("shown.bs.modal", function (e) {
  //   $("#video").attr(
  //     "src",
  //     $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
  //   );
  // });
  // $("#videoModal").on("hide.bs.modal", function (e) {
  //   $("#video").attr("src", $videoSrc);
  // });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Project carousel
  $(".project-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
})(jQuery);

// pure js

//catch selector
// let readBtn1 = document.getElementById("read1");
// let readBtn2 = document.getElementById("read2");
// let readBtn3 = document.getElementById("read3");
// let moreInfo1 = document.querySelector(".more-info1");
// let moreInfo2 = document.querySelector(".more-info2");
// let moreInfo3 = document.querySelector(".more-info3");

// let collapse = document.querySelector(".navbar-collapse");
let menu = document.querySelector(".nav-menu");
let btn = document.getElementById("navBar");
// console.log(menu);
// console.log(collapse);
// console.log(btn);
// menu.onclick= function () {
//   document.querySelector(".navbar .navbar-nav").classList.toggle("hide");
// }
btn.onclick = function () {
  document.querySelector(".navbar .navbar-nav").classList.toggle("hide");
    
};
// let x =function(){
//   document.querySelector(".navbar .navbar-nav").classList.toggle("hide");

// }


// let navButton=document.querySelector(".collapse:not(.show)")
// console.log(navButton.style);
// console.log(moreInfo1,moreInfo2,moreInfo3);

// navButton.onclick=function(){
//       document.querySelector(".collapse:not(.show)").classList.toggle("hide");
//   }
//   readBtn1.onclick=function(){
//       document.querySelector(".more-info1").classList.toggle("hide");
//   }

//   readBtn2.onclick=function(){
//       document.querySelector(".more-info2").classList.toggle("hide");
//   }

//   readBtn3.onclick=function(){
//       document.querySelector(".more-info3").classList.toggle("hide");
//   }

//send Email
// function sendEmail() {
//   mail.send({
//     Host : "smtp.gmail.com",
//     Username : "ym6690897@gmail.com",
//     Password : "password",
//     To : 'ym6690897@gmail.com',
//     From :document.getElementById("email").value,
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
// 

// dark mode function
let boldText = document.querySelectorAll("b")
let inputs = document.querySelectorAll("input")
// let message = document.querySelectorAll("textarea")
// // console.log(message);
// // console.log(inputs);
// let links = document.querySelectorAll(".btn btn-light")
// let navBar = document.querySelector("nav")
// // console.log(boldText);
// let darkBtn = document.querySelector(".dark-btn")
// darkBtn.onclick = function(){
//   document.body.classList.toggle("dark");
//     navBar.classList.toggle("dark")
//   boldText.forEach((el,index)=>{
//     el.classList.toggle("b-dark")
//   })
//   inputs.forEach((el,index)=>{
//     el.classList.toggle("dark")
//   })
//   message.forEach((el,index)=>{
//     el.classList.toggle("dark")
//   })
//   localStorage.setItem("backgroundColor","dark")
  
// }
//
// Style 1
const btn1_ctn = document.getElementsByClassName("btn1_container")[0];
const one = document.querySelector(".fas");
btn1_ctn.addEventListener("click", () => {
  one.classList.toggle("fa-circle");
  one.classList.toggle("fa-moon");
  one.classList.toggle("active1");
  btn1_ctn.classList.toggle("changeBg");
  document.body.classList.toggle("dark");
      navBar.classList.toggle("dark")
    boldText.forEach((el,index)=>{
      el.classList.toggle("b-dark")
    })
    inputs.forEach((el,index)=>{
      el.classList.toggle("dark")
    })
});
// Style 1
// const btn1_ctn = document.getElementsByClassName("btn1_container")[0];
// const one = document.querySelector(".fas");
// btn1_ctn.addEventListener("click", () => {
//   one.classList.toggle("fa-circle");
//   one.classList.toggle("fa-moon");
//   one.classList.toggle("active1");
//   btn1_ctn.classList.toggle("changeBg");
//   // document.body.classList.toggle("dark")
// });