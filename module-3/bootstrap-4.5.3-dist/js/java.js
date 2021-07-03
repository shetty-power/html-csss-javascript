let image=document.getElementById('img')
let hide=document.getElementById('hide')
let show=document.getElementById('show')
let text=document.getElementById('text')
function onclick () {
	image.style.display='none'

}
function ondblclick () {
	image.style.display='block'
	// body...
}
function onmouseover(text){
	text.innerHTML='oops'
}
function onmouseout(text){
	text.innerHTML='MOUse'
}