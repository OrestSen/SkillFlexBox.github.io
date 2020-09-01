// let imgEl = document.querySelector("img")

// console.log(imgEl)
// ***********************МІНЯЄМО КАРТИНКУ*************************
// function changeImg() {
//     let imgSrc = imgEl.getAttribute("src");
//     if(imgSrc === "images/icon (1).png") {
//         imgEl.setAttribute("src","images/icon (11).png")
//     } else {
//         imgEl.setAttribute("src","images/icon (1).png")
//     }
// }
// ******************** ПОЛЕ ПОШУКУ*********************
// imgEl.addEventListener("click", changeImg)
  
// let scroll_gg = document.getElementById('container').onscroll = function() {
//   console.log("scrolling")
// }
$(document).ready(function(){
  
  $(".fa-search").click(function(){
    $(".wrap, .input").toggleClass("active");
    $("input[type='text']").focus();
  });
  
});