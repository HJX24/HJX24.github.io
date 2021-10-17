function draw() {
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');

	ctx.strokeStyle = "red";
	ctx.lineWidth = 1 ;
	
	var depth =parseInt(document.getElementById("depth").value);
	
	ctx.clearRect(0,0,600,600);
	function sierpinski(x1,y1,x2,y2,x3,y3,n){
		
		if (n<0)  return;
		ctx.beginPath();
		ctx.moveTo(x1,y1);
		
		ctx.lineTo(x2,y2);
		ctx.lineTo(x3,y3);
		ctx.lineTo(x1,y1);
		ctx.closePath();
		ctx.stroke();
		
		var x4 = (x1 + x2) / 2;
		var y4 = (y1 + y2) / 2;
		var x5 = (x2 + x3) / 2;
		var y5 = (y2 + y3) / 2;
		var x6 = (x1 + x3) / 2;
		var y6 = (y1 + y3) / 2;
		
		sierpinski(x1,y1,x4,y4,x6,y6,n-1);
		sierpinski(x6,y6,x5,y5,x3,y3,n-1);
		sierpinski(x4,y4,x2,y2,x5,y5,n-1);
		sierpinski(x4,y4,x5,y5,x6,y6,n-1);
	}
	sierpinski(300, 500-500*Math.sqrt(3)/2, 50, 500, 550, 500,depth);
}