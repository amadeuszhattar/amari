//

// const sortContainer = document.querySelector(
//   ".offers__navigation--sort-container"
// );
// const sortArrow = document.querySelector(".offers__sort--arrow");
// const sortPopup = document.querySelector(".offers__sort--menu");

// const overlay = document.querySelector(".overlay");
// const mainbox = document.querySelector(".offers__main--container");

// left nav handlers
const leftNavEvents = function () {
  const navLeft = document.querySelector(".offers__navigation--left");
  const offersLeftBtn = document.querySelectorAll(
    ".offers__left--button--container"
  );
  navLeft.addEventListener("click", function (e) {
    const cur = e.target.closest(".offers__left--button--container");
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
};

leftNavEvents();

// mainbox.addEventListener('click', function(e){
//   const cur = e.target
//   const btn = cur.closest('.offers__navigation--sort-container');
//   console.log(cur);
//   if(btn) {
//     sortPopupAdd();
//   } else {
//     sortPopupRemove();
//   }
// })

// right nav handlers
// document.addEventListener("click", function (e) {
//   const sortBtn = e.target.closest('.offers__navigation--sort-container')
//   if (!sortArrow.classList.contains("offers__sort--arrow--active") && sortBtn) {
//     sortPopupAdd();
//   } else
//     sortPopupRemove();
// });

// closing with escape

// document.addEventListener("keydown", function (e) {
//   if (
//     e.key === "Escape" &&
//     sortPopup.classList.contains("offers__sort--menu--active")
//   ) {
//     sortPopupRemove();
//   }
// });

// sortPopup.addEventListener("click", function (e) {
//   const text = e.target.textContent;
//   const sortBtn = document.querySelector(".offers__navigation--sort");
//   sortBtn.textContent = text;
//   sortPopupRemove();
// });

const toggleSubscriptionBtn = function () {
  const subscriptionInput = document.querySelector(".offers__remote--input");
  const navRight = document.querySelector(".offers__navigation--right");
  subscriptionInput.checked = false;
  navRight.addEventListener("click", function (e) {
    const input = e.target.closest(".offers__remote--input--container");
    const subscription = document.querySelector(
      ".offers__navigation--sub--container"
    );
    if (!input) return; // guard clouse
    if (input && subscriptionInput.checked == false) {
      subscriptionInput.checked = true;
      subscription.classList.add("offers__navigation--sub--container--active");
    } else {
      subscriptionInput.checked = false;
      subscription.classList.remove(
        "offers__navigation--sub--container--active"
      );
    }
  });
};

toggleSubscriptionBtn();

const sortingOffers = function () {
  const mainContainer = document.querySelector(".offers__main--container");
  mainContainer.addEventListener("click", function (e) {
    const clicked = e.target;
    const locItem = e.target.closest(".offers__loc--item");
    if (!locItem) return;
    else console.log(locItem.value);
  });
};

sortingOffers();

// helper functions
// const sortPopupRemove = function () {
//   sortPopup.classList.remove("offers__sort--menu--active");
//   sortArrow.classList.remove("offers__sort--arrow--active");
//   overlay.classList.add('hidden')
// };

// const sortPopupAdd = function () {
//   sortArrow.classList.add("offers__sort--arrow--active");
//   sortPopup.classList.add("offers__sort--menu--active");
//   overlay.classList.remove('hidden')
// };
