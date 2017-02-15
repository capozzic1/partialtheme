$(document).ready(function(){showServs();
//on click of li, display the related div function showServs() {var servs = document.getElementsByClassName("servd");var tabs = document.getElementsByClassName("tab");
for (var i = 0; i < tabs.length; i++) (function(i){	tabs[i].onclick = function(){	for (var j = 0; j < tabs.length; j++) {		servs[j].classList.remove("actd");			}		servs[i].classList.toggle("actd");	}})(i);}//var myDiv = item.href;//var target = myDiv.split("#");
$('.portbtn').click(function(){
	$('.port-content').toggle();
	
});

$('.blogbtn').click(function(){
	$('.blog-content').toggle();
	
});

$('.otherdown').click(function(){
	$('.othercont').toggle();
	
});

//slide index
var slideIndex = 1;
showDivs(slideIndex);
var sliauto = setInterval(animDivs,3000);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
//make it automatic
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("sli");

    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    //x[slideIndex-1].style.display = "block";
	$(x[slideIndex-1]).css({display:"block"});
	

}

function animDivs() {
	
	plusDivs(1);
}



var left = document.getElementsByClassName('leftb')[0];
var right = document.getElementsByClassName('rightb')[0];

//plusDivs(-1);

right.onclick = function(){
	clearInterval(sliauto);
	plusDivs(1);
	
	
};
left.onclick = function(){
	clearInterval(sliauto);
	plusDivs(-1);
	
}

});