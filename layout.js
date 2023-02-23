const navLeft = document.querySelector(".offers__navigation--left");
const navRight = document.querySelector(".offers__navigation--right");
const sortContainer = document.querySelector(".offers__navigation--sort-container");
const sortArrow = document.querySelector(".offers__sort--arrow");
const sortPopup = document.querySelector(".offers__sort--menu");
const sortMenu = document.querySelector(".offers__sort--menu");
const offersLeftBtn = document.querySelectorAll(".offers__left--button--container");


// left nav handlers
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



// right nav hadlers
sortContainer.addEventListener("click", function (e) {
  if (!sortArrow.classList.contains("offers__sort--arrow--active")) {
    sortPopupAdd();
  } else
    sortPopupRemove();
});

// closing with escape

document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    sortPopup.classList.contains("offers__sort--menu--active")
  ) {
    sortPopupRemove();
  }
});


sortMenu.addEventListener("click", function (e) {
  const text = e.target.textContent;
  const sortBtn = document.querySelector(".offers__navigation--sort");
  sortBtn.textContent = text;
  sortPopupRemove();
});

const subscriptionInput = document.querySelector('.offers__remote--input');
subscriptionInput.checked = false


navRight.addEventListener('click', function(e){
  const input = e.target.closest('.offers__remote--input--container')
  const subscription = document.querySelector('.offers__navigation--sub--container')
  if(!input) return // guard clouse
  if(input && subscriptionInput.checked == false){
    subscriptionInput.checked = true
    subscription.classList.add('offers__navigation--sub--container--active')
  } else {
    subscriptionInput.checked = false
    subscription.classList.remove('offers__navigation--sub--container--active')
  }
  
 });


// helper functions
const sortPopupRemove = function () {
  sortPopup.classList.remove("offers__sort--menu--active");
  sortArrow.classList.remove("offers__sort--arrow--active");
};

const sortPopupAdd = function () {
  sortArrow.classList.add("offers__sort--arrow--active");
  sortPopup.classList.add("offers__sort--menu--active");
};


