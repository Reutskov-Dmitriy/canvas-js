const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
let timerId
let points = [
	{ x: (innerWidth / 100), y: (innerHeight / 2) },
	{ x: (innerWidth / 2), y: (innerHeight / 100) },
	{ x: (innerWidth * 0.99), y: (innerHeight / 2) },
	{ x: (innerWidth / 2), y: (innerHeight * 0.99) },

]

document.body.append(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;

onresize = () => {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	let points = [
		{ x: (innerWidth / 100), y: (innerHeight / 2) },
		{ x: (innerWidth / 2), y: (innerHeight / 100) },
		{ x: (innerWidth * 0.99), y: (innerHeight / 2) },
		{ x: (innerWidth / 2), y: (innerHeight * 0.99) },
	]

	drawPolygon(points)
}

clearInterval(timerId);
timerId = setInterval(() => {
	points[0].y--;
	points[1].x++;
	points[2].y++;
	points[3].x--;
	drawPolygon(points)
}, 20);

// ctx.fillRect(10, 10, 200, 100);

drawPolygon();

function drawPolygon(points) {
	ctx.beginPath()
	ctx.moveTo(points[0].x, points[0].y);
	ctx.lineTo(points[1].x, points[1].y);
	ctx.lineTo(points[2].x, points[2].y);
	ctx.lineTo(points[3].x, points[3].y);
	ctx.lineTo(points[0].x, points[0].y);

	ctx.strokeStyle = 'red'
	ctx.lineWidth = 5;
	ctx.fillStyle = 'gold'
	ctx.lineCap = 'round'
	ctx.stroke();
	ctx.fill();
};

function start() {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	let points = [
		{ x: (innerWidth / 100), y: (innerHeight / 2) },
		{ x: (innerWidth / 2), y: (innerHeight / 100) },
		{ x: (innerWidth * 0.99), y: (innerHeight / 2) },
		{ x: (innerWidth / 2), y: (innerHeight * 0.99) },
	]
	function animate() {

	};

}