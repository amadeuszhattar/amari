"use strict";

const getCoordsFromItem = function (locItem) {
  if (locItem) {
    // we can render map on that
    const coords = locItem.dataset.type;
    const locCoords = coords.split(",").map((el) => Number(el));
    const [lat, lng] = locCoords;
    console.log(lat, lng);
  }
};

const animateArrorDropdown = function (arrow, dropdown, overlay) {
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
};

const extraMenuLocation = function () {
  const offersBox = document.querySelector(".offers__box--container");
  offersBox.addEventListener("click", function (e) {
    const allArrows = document.querySelectorAll(".offers__info--expand--box");
    const allCityList = document.querySelectorAll(".offers__city--list");
    const overlay = document.querySelector(".overlay");
    const clicked = e.target;
    // get coords function and then render some stuff on map
    const locItem = clicked.closest(".offers__city--item");
    getCoordsFromItem(locItem);

    // checking if box exists and expand dropdown menu
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

    // animate arrow dropdown
    const dropdown = curBox.closest("div").querySelector(".offers__city--list");
    const arrow = cur
      .closest("div")
      .querySelector(".offers__info--expand--box");

    animateArrorDropdown(arrow, dropdown, overlay);
  });
};

extraMenuLocation();
