const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const navwrap = document.querySelector('.nav-wrap')

openBtn.addEventListener( 'click', ()=>{
    navwrap.style.display = 'flex'
    closeBtn.style.display = 'inline-block'
    openBtn.style.display = 'none'
} )

closeBtn.addEventListener( 'click', ()=>{
    navwrap.style.display = 'none'
    closeBtn.style.display = 'none'
    openBtn.style.display = 'inline-block'
} )
