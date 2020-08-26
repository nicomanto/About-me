window.onload = function () {
	/*Checkk if device is mobile/tablet*/
	
	/*Mobile view*/
	if(WURFL.is_mobile){
		document.getElementsByClassName("menu-pc")[0].style.display = "none";
		document.getElementsByClassName("menu-btn")[0].style.display = "flex";
		document.getElementsByClassName("avatar")[0].style.marginTop = "1em";
	}
		
	const menuBtn = document.querySelector('.menu-btn');
	let menuOpen = false;
	
	menuBtn.addEventListener('click', ()=> {
		
		/*Open mobile button burger*/
		if(!menuOpen) {
			menuBtn.classList.add('open');
			document.getElementsByClassName("menu-pc")[0].style.display = "flex";
			document.querySelector('.menu-pc').classList.add('menu-mobile');
			document.getElementsByClassName("avatar")[0].style.display = "none";
			document.getElementById("introduction").style.display = "none";
			document.getElementById("footer").style.display = "none";
			
			menuOpen=true;
		}
		/*Close mobile button burger*/
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


