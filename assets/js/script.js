var c = document.getElementById("mon_canvas");
 var ctx = c.getContext("2d");

// base de la maison
ctx.beginPath();
ctx.moveTo(0,400);
ctx.lineTo(200,400);
ctx.lineTo(200,200);
ctx.lineTo(0,200);
ctx.closePath();
ctx.fillStyle="#A3D7E7";
ctx.fill();
// toit de la maison
ctx.beginPath();
ctx.moveTo(0,200);
ctx.lineTo(100,70);
ctx.lineTo(200,200);;
ctx.closePath();
ctx.fill();
ctx.fillStyle="red";

// fenetre
ctx.beginPath();
ctx.moveTo(20,220);
ctx.lineTo(60,220);
ctx.lineTo(60,260);
ctx.lineTo(20,260);
ctx.closePath();
ctx.fillStyle="red";
ctx.fill();
//
ctx.beginPath();
ctx.moveTo(140,220);
ctx.lineTo(180,220);
ctx.lineTo(180,260);
ctx.lineTo(140,260);
ctx.closePath();
ctx.fill();
ctx.fillStyle="black";

// porte
ctx.beginPath();
ctx.moveTo(80,400);
ctx.lineTo(80,330);
ctx.lineTo(120,330);
ctx.lineTo(120,400);
ctx.closePath();
ctx.fillStyle="red";
ctx.fill();
