const menuDash = document.querySelector('.menu__dash');
const subMenuDash = document.querySelector('.submenu__dash');


menuDash.addEventListener('click', ()=>{
    if(subMenuDash.style.display==='none') {
    subMenuDash.style.display = 'block'
} else {
    subMenuDash.style.display = 'none'
}

})