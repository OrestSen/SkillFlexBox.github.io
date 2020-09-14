// *********************************************navigation*************************************
let mobileMenu = document.querySelector(".nav-mobile-menu")

let mainMenu = document.querySelector(".navigation")

mobileMenu.addEventListener("click",function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu")
    }
})

// ********************************************single*****************************************
// addToCartButtons.addEventListener("click", function(e) {
//   let current = e.target;
//   console.log(current)
//   current.style.backgroundColor = "red"
// })

// *********************************************modal****************************************
let showMeMore = document.querySelectorAll(".button0");
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".btn-close")
let pleaseCall = document.querySelector(".pleaseCall")

showMeMore.forEach(function(btn) {
    btn.addEventListener("click",function() {
    modal.classList.add("show");
    modal.classList.remove("hide")
    })
})

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

closeBtn.addEventListener("click",closeModal)
pleaseCall.addEventListener("click",closeModal)
modal.addEventListener("click",function(e) {
    if(e.target == modal ) {
    closeModal()
    }
})


// *************************************modal-scroll*************************************
let modal_scroll = document.querySelector(".modal-scroll")
let closeBtnScr = document.querySelector(".btn-close-scroll")
let pleaseCallScr = document.querySelector(".button00")

function openModalScr() {
    modal_scroll.classList.add("show1");
    modal_scroll.classList.remove("hide1")
}
function closeModalScr() {
    modal_scroll.classList.add("hide1");
    modal_scroll.classList.remove("show1");
}
function showModalByScroll() {
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
      openModalScr()
      removeEventListener("scroll",showModalByScroll)
    }
  }
window.addEventListener("scroll",showModalByScroll)

closeBtnScr.addEventListener("click",closeModalScr)
pleaseCallScr.addEventListener("click", closeModalScr)
modal_scroll.addEventListener("click",function(e) {
    if(e.target == modal_scroll ) {
    closeModalScr()
    }
})
// ********************************************************************************

// *******************************************************************************************************
AOS.init();

$('.menu').onePageNav()
