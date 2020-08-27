window.onload = function () {
	/*Checkk if device is mobile/tablet*/
	
	/*Mobile view*/
	if(WURFL.is_mobile){
		document.getElementsByClassName("menu-pc")[0].style.display = "none";
		document.getElementsByClassName("menu-btn")[0].style.display = "flex";
		document.getElementsByClassName("projects-table")[0].style.display = "none";
		document.getElementsByClassName("project-view-mobile")[0].style.display = "inherit";
	}
	/*Pc view*/
	else{
		document.getElementsByClassName("project-view-mobile")[0].style.display = "none";
	}
		
	const menuBtn = document.querySelector('.menu-btn');
	let menuOpen = false;
	menuBtn.addEventListener('click', ()=> {
    
		/*Open mobile button burger*/
		if(!menuOpen) {
			menuBtn.classList.add('open');
			document.getElementsByClassName("menu-pc")[0].style.display = "flex";
			document.querySelector('.menu-pc').classList.add('menu-mobile');
			document.getElementById("footer").style.display = "none";
			document.getElementsByClassName("project-view-mobile")[0].style.display = "none";
			
			menuOpen=true;
		}
		/*Close mobile button burger*/
		else {
			menuBtn.classList.remove('open');
			document.getElementsByClassName("menu-pc")[0].style.display = "none";
			document.getElementById("footer").style.display = "inherit";
			document.getElementsByClassName("project-view-mobile")[0].style.display = "inherit";
			
			menuOpen=false;
		}
	})
}


