var canvas = new fabric.canvas('my canvas');

ball_x=0;
ball_y=0;
hole_x=400;
hole_y=800;



block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-h1.png",function(img){
		hole_obj = Img;
		hole_obj.scaletowidth(50);
		hole_obj.scaletoheight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});

	new_image();
}

function new_image()
{
	fabric.image.fromURL("ball.png",function(img){
		ball_obj = Img;
		ball_obj.scaletowidth(50);
		ball_obj.scaletoheight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);

		document.getElementById("hd3").innerHTML="You have Hit the Goal !"
		document.getElementById("mycanvas").style.bordercolor="red";
	}
	
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	
		if(ball_y<=38)
	{
		 ball_y=ball_y+block_image_height;
		 console.log("block_image_height"+block_image_height);
		 console.log("When up arrow key is pressed, x ="+ ball_x+",y="+ball_y);
		 canvas.remove(ball_obj);
		 new_image();
	}
	

	function down()
	if(ball_y<=40)
	{
		 ball_y=ball_y+block_image_height;
		 console.log("block_image_height"+block_image_height);
		 console.log("When dowm arrow key is pressed, x ="+ ball_x+",y="+ball_y);
		 canvas.remove(ball_obj);
		 new_image();
	}

	function left()
	{
		if(ball_x >37)
	{
		 ball_y=ball_y+block_image_height;
		 console.log("block_image_height"+block_image_height);
		 console.log("When left arrow key is pressed, x ="+ ball_x+",y="+ball_y);
		 canvas.remove(ball_obj);
		 new_image();
	
	}

	function right()
	
		if(ball_x <=39)
		{
			ball_y=ball_y+block_image_height;
			console.log("block_image_height"+block_image_height);
			console.log("When right arrow key is pressed, x ="+ ball_x+",y="+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

