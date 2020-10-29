let image=document.getElementById('img');
let hide=document.getElementById('hide');
let show=document.getElementById('show');
let text=document.getElementById('text');

hide.onclick =function () {
	image.style.display='none';
	// body...
}
show.ondblclick =function () {
	image.style.display='block';
	// body...
}
text.onmouseover=function(){
	text.innerHTML='oops';
}
text.onmouseoutr=function(){
	text.innerHTML='MOUse';
}