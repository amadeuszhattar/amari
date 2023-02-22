const navLeft = document.querySelector(".offers__navigation--left");
const navRight = document.querySelector(".offers__navigation--right");
const sortArrow = document.querySelector(".offers__sort--arrow");
const sortPopup = document.querySelector('.offers__sort--menu')


const offersLeftBtn = document.querySelectorAll(".offers__left--button");

// toggling left nav button
navLeft.addEventListener("click", function (e) {
  const cur = e.target.closest(".offers__left--button");
  if (!cur) return;
  if (!cur.classList.contains("offers__left--button--active")) {
    offersLeftBtn.forEach((btn) =>
      btn.classList.remove("offers__left--button--active")
    );
    offersLeftBtn.forEach((btn) => btn.classList.add("left__button--hover"));
    cur.classList.add("offers__left--button--active");
    cur.classList.remove("left__button--hover");
  }
});

// right nav hadlers
navRight.addEventListener("click", function (e) {
  const cur = e.target.closest(".offers__navigation--sort");
  if (!sortArrow.classList.contains("offers__sort--arrow--active")) {
    sortArrow.classList.add("offers__sort--arrow--active");
    sortPopup.classList.add('offers__sort--menu--active')
  } else if (sortArrow.classList.contains("offers__sort--arrow--active")) {
    sortArrow.classList.remove("offers__sort--arrow--active");
    sortPopup.classList.remove('offers__sort--menu--active')
  }
});
