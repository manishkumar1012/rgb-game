var num=6;
var colors=generateRandomColors(num);

var squares=document.querySelectorAll(".square");
//pick a random color
var pickedColor=pickColor();
var displayColor=document.querySelector("#displayColor");
//display the picked color
displayColor.textContent=pickedColor;
var message=document.querySelector("#DisplayResult");
var h1=document.querySelector("h1");
var newColors=document.querySelector("#newColors");
var modes=document.querySelectorAll(".btn");

for(var i=0; i<modes.length; i++)
{
	modes[i].addEventListener("click",function(){
       modes[0].classList.remove("selected");
       modes[1].classList.remove("selected");
       this.classList.add("selected");
       this.textContent==="Easy"? num=3: num=6;
       reset();
	});
}
//reset function
function reset(){
	//generate n random colors
	colors=generateRandomColors(num);
	// change color of  six squares
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else
			squares[i].style.display="none";
		
	}
	// //pick random color
	pickedColor=pickColor();
	// //change picked color
	displayColor.textContent=pickedColor;
	h1.style.backgroundColor= "steelblue";
	message.textContent="";
	newColors.textContent="New Colors";
}

for(var i=0; i<squares.length; i++)
{
	//add initial colors
	squares[i].style.background=colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
    	var clickedColor=this.style.backgroundColor;
       if(pickedColor===clickedColor)
       	 {
       	 	message.textContent="Correct";
       	 	changeColors(pickedColor);
       	 	newColors.textContent="Play Again?";
       	 	h1.style.backgroundColor=pickedColor;
       	 }
       	else
        {
           this.style.backgroundColor= "#232323";
           message.textContent="Try Again";
        }
    });
}
function changeColors(color)
{
	for(var i=0; i<squares.length; i++)
	{
		//change colors of all the squares
		//as the picked color
		squares[i].style.backgroundColor=color;
	} 
	return;
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
//function to generate n random colors
function generateRandomColors(n)
{
	//create an empty array
    var arr=[]
    for(var i=0; i<n; i++)
    {
    	//push the random color to the array
    	arr.push(randomColor());
    }
    //return arr of colors
    return arr;
}
function randomColor()
{
     //pick a red color(0-255)
     var r=Math.floor(Math.random() * 256);
     //pick a green color(0-255)
     var g=Math.floor(Math.random() * 256);
     //pick a blue color(0-255)
     var b=Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b + ")";
}
//function for new colors
newColors.addEventListener("click",function(){
	reset();
});