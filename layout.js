const navLeft = document.querySelector('.offers__navigation--left');
const offersLeftBtn = document.querySelectorAll('.offers__left--button');

// toggling left nav button
navLeft.addEventListener('click', function(e){
    const cur = e.target;
   if(!cur.classList.contains('offers__left--button--active')){
    offersLeftBtn.forEach(btn => btn.classList.remove('offers__left--button--active'))
    cur.classList.add('offers__left--button--active');
   }
})