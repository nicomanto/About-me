window.onload = function () {
	if(WURFL.is_mobile){
		document.getElementsByClassName("menu-pc")[0].style.display = "none";
		document.getElementsByClassName("menu-btn")[0].style.display = "flex";
		document.getElementsByClassName("avatar")[0].style.marginTop = "1em";
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


