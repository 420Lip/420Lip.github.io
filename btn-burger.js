const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

var btn = document.querySelector('.navButton');
var nav = document.querySelector('.nav');



btn.onclick = function(){
	nav.classList.toggle('navOpen');
	
}
