"use strict";

// offersBox.addEventListener('click', function(e){
//     // get elements
//     const curEl = e.target.closest('.offers__box')
//     const clicked = e.target.closest('.offers__info--city')
//     const curElArrow = curEl.closest('div').querySelector('.offers__info--expand--box')
//     const curElMenu = curEl.closest('div').querySelector('.offers__city--list')
//     // check if curEl exists
//     if(!curEl || !clicked) return
//     // open menu once clicking on the button
//     if(clicked.classList.contains('offers__info--city') && !curElArrow.classList.contains('offer__info--expand--active')){
//         menuAdd(curElMenu, curElArrow)
//     } else {
//         menuRemove(curElMenu, curElArrow)
//     }
// })

// offersBox.addEventListener('click', function(e){
//     const curEl = e.target.closest('.offers__box')
//     const clicked = e.target.closest('.offers__city--item')
//     const curElMenu  = curEl.closest('div').querySelector('.offers__city--list')
//     const curElArrow = curEl.closest('div').querySelector('.offers__info--expand--box')
//     if(!curEl) return
//     if(clicked){
//         menuRemove(curElMenu, curElArrow)
//     }
// })

// // helpers
// const menuRemove = function(curElMenu, curElArrow){
//     curElArrow.classList.remove('offers__info--expand--active')
//     curElMenu.classList.remove('offers__city--list--active');
// }

// const menuAdd = function(curElMenu, curElArrow){
//     curElArrow.classList.add('offers__info--expand--active')
//     curElMenu.classList.add('offers__city--list--active');
// }
// document.addEventListener('click', function(e){
//     e.preventDefault()
//     const allArrows = document.querySelectorAll('.offers__info--expand--box')
//     const allCityList = document.querySelectorAll('.offers__city--list')
//     const clicked = e.target
//     const expandMenu = clicked.closest('.offers__info--city')
//     if(!expandMenu) {
//         allArrows.forEach(el => el.classList.remove('offers__info--expand--active'))
//         allCityList.forEach(el => el.classList.remove('offers__city--list--active'))
//     }
//     if(!expandMenu) return
//     const arrow = expandMenu.closest('div').querySelector('.offers__info--expand--box')
//     const offerBox = e.target.closest('.offers__box')
//     const cityList = offerBox.closest('div').querySelector('.offers__city--list')
//     if(!cityList.classList.contains('offers__city--list--active')){
//         allCityList.forEach(el => el.classList.remove('offers__city--list--active'))
//         cityList.classList.add('offers__city--list--active')
//     }
//     if(!arrow.classList.contains('offers__info--expand--active')){
//         allArrows.forEach(el => el.classList.remove('offers__info--expand--active'))
//         arrow.classList.add('offers__info--expand--active')

//     } else {
//         arrow.classList.remove('offers__info--expand--active')
//         cityList.classList.remove('offers__city--list--active')

//     }
// })

const extraMenuLocation = function () {
  const offersBox = document.querySelector(".offers__box--container");
  offersBox.addEventListener("click", function (e) {
    const allArrows = document.querySelectorAll(".offers__info--expand--box");
    const allCityList = document.querySelectorAll(".offers__city--list");
    const overlay = document.querySelector(".overlay");
    const clicked = e.target;
    const locItem = clicked.closest(".offers__city--item");
    if (locItem) {
      console.log(locItem.dataset.type);
    }
    const curBox = e.target.closest(".offers__box");
    const cur = clicked.closest(".offers__info--city");
    if (!curBox || !cur) {
      allArrows.forEach((el) =>
        el.classList.remove("offers__info--expand--active")
      );
      allCityList.forEach((el) =>
        el.classList.remove("offers__city--list--active")
      );
      overlay.classList.add("hidden");
    }
    if (!cur) return;
    const dropdown = curBox.closest("div").querySelector(".offers__city--list");
    const arrow = cur
      .closest("div")
      .querySelector(".offers__info--expand--box");
    if (!arrow) return;
    if (!arrow.classList.contains("offers__info--expand--active")) {
      arrow.classList.add("offers__info--expand--active");
      dropdown.classList.add("offers__city--list--active");
      overlay.classList.remove("hidden");
    } else {
      arrow.classList.remove("offers__info--expand--active");
      dropdown.classList.remove("offers__city--list--active");
      overlay.classList.add("hidden");
    }
  });
};

extraMenuLocation();

