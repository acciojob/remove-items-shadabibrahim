//your JS code here. If required.
let colors = document.querySelector("#colorSelect");

document.querySelector('input[type="button"]')
	.addEventListener('click',()=>{
		colors.remove(colors.selectedIndex)
	});
					  

