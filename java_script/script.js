const mobile = window.matchMedia("only screen and (max-width: 760px)");
if (/Mobi|Tablet|iPad|iPhone/i.test(navigator.userAgent) || Mobile.matches) {
    isMobile=true;
}
else{
	isMobile=false;
}

window.onload = function () {
	if(isMobile){
		document.getElementsByClassName("menu-pc")[0].style.display = "none";
		document.getElementsByClassName("menu-btn")[0].style.display = "flex";
	}
		
	const menuBtn = document.querySelector('.menu-btn');
	let menuOpen = false;
	menuBtn.addEventListener('click', ()=> {
    
	if(!menuOpen) {
        menuBtn.classList.add('open');
		document.getElementsByClassName("menu-pc")[0].style.display = "flex";
		document.querySelector('.menu-pc').classList.add('menu-mobile');
		document.getElementsByClassName("avatar")[0].style.display = "none";
		document.getElementById("introduction").style.display = "none";
		document.getElementById("footer").style.display = "none";
		
        menuOpen=true;
    }
    else {
        menuBtn.classList.remove('open');
		document.getElementsByClassName("menu-pc")[0].style.display = "none";
		document.getElementsByClassName("avatar")[0].style.display = "inherit";
		document.getElementsByClassName("avatar")[0].style.margin = "auto";
		document.getElementById("introduction").style.display = "inherit";
		document.getElementById("footer").style.display = "inherit";
        menuOpen=false;
    }
})
}


