const cityExpandBtn = document.querySelector('.offers__info--city')
const cityExpandMenu = document.querySelector('.offers__city--list')
const offersBox = document.querySelector('.offers__box--container');



// location menu expand 
offersBox.addEventListener('click', function(e){
    // get elements 
    const curEl = e.target.closest('.offers__box')
    const clicked = e.target.closest('.offers__info--city')
    const cityItem = e.target.closest('.offers__city--item')
    const curElArrow = curEl.closest('div').querySelector('.offers__info--expand--box')
    const curElMenu = curEl.closest('div').querySelector('.offers__city--list')
    // check if curEl exists 
    if(!curEl || !clicked) return
    // open menu once clicking on the button
    if(clicked.classList.contains('offers__info--city') && !curElArrow.classList.contains('offer__info--expand--active')){
        menuAdd(curElMenu, curElArrow)
    } else {
        menuRemove(curElMenu, curElArrow)
    }
})

offersBox.addEventListener('click', function(e){
    const curEl = e.target.closest('.offers__box')
    const clicked = e.target.closest('.offers__city--item')
    const curElMenu  = curEl.closest('div').querySelector('.offers__city--list')
    const curElArrow = curEl.closest('div').querySelector('.offers__info--expand--box')
    if(!clicked) return 
    if(clicked){
        menuRemove(curElMenu, curElArrow)
    } 
})

// helpers 
const menuRemove = function(curElMenu, curElArrow){
    curElArrow.classList.remove('offer__info--expand--active')
    curElMenu.classList.remove('offers__city--list--active');
}

const menuAdd = function(curElMenu, curElArrow){
    curElArrow.classList.add('offer__info--expand--active')
    curElMenu.classList.add('offers__city--list--active');
}

