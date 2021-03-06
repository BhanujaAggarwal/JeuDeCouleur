var mode=6;
var color = generatecolor(mode);
var colorpickedbyus=colorindex();
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=colorpickedbyus;
var squares=document.querySelectorAll(".square");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbtn=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	mode=3;
	color=generatecolor(mode);
	colorpickedbyus=colorindex();
	colordisplay.textContent=colorpickedbyus;
	for (var i = 0; i < squares.length; i++) {
		if(color[i])
		{
		squares[i].style.background=color[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});
hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	mode=6;
	color=generatecolor(mode);
	colorpickedbyus=colorindex();
	colordisplay.textContent=colorpickedbyus;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=color[i];
		squares[i].style.display="block";
	}
});



resetbtn.addEventListener("click",function(){
	color=generatecolor(mode);
	colorpickedbyus=colorindex();
	colordisplay.textContent=colorpickedbyus;
	this.textContent="New Colors";
	for (var i = 0; i <squares.length; i++) {
	squares[i].style.background=color[i];
	}
	h1.style.background="steelblue";
	messagedisplay.textContent="";
});
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=color[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		if(clickedcolor===colorpickedbyus)
			{
				messagedisplay.textContent="Correct!";
				changecolors(clickedcolor);
				h1.style.background=clickedcolor;
				resetbtn.textContent="Play Again?";
			}			
		else{
				this.style.background="#232323";
				messagedisplay.textContent="Try Again";
			}
	});
}

function changecolors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=color;
	}
}
function colorindex()
{
	var random=Math.floor(Math.random()*color.length);
	return color[random];
}
function generatecolor(num)
{
	var arr=[];
	for (var i = 0; i < num; i++) {
		arr.push(randomcolor());
}
return arr;
}
function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}








