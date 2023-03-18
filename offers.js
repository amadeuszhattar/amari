"use strict";


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



